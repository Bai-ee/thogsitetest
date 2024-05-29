export const dynamic = "force-dynamic";
export const revalidate = 60;

import { NextResponse } from "next/server";
const { Connection, PublicKey } = require("@solana/web3.js");
import Moralis from "moralis";
const tokenMintAddress = new PublicKey(
  "5CqfXex1knfRiozwDtgFFNaiGR9TsmSUcWDNUTUGZQru"
);
const tokenDecimals = 6;
const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY!; // Replace with your actual Moralis API key

const SOL_SNIPER_URL_PROD =
  "https://q911c3yhyc.execute-api.us-east-1.amazonaws.com/prod/";
const SOL_SNIPER_API_KEY = process.env.NEXT_PUBLIC_SOL_SNIPER_API_KEY!;

const initMoralis = async () => {
  try {
    await Moralis.start({
      apiKey: MORALIS_API_KEY,
    });
  } catch (e) {
    console.error("Error initializing Moralis:", e);
    throw e;
  }
};

initMoralis()
  .then(() => console.log("Moralis initialized"))
  .catch(console.error);

const getTokenPriceData = async () => {
  try {
    const response = await fetch(
      `https://solana-gateway.moralis.io/token/mainnet/${tokenMintAddress.toBase58()}/price`,
      {
        headers: {
          "X-API-Key": MORALIS_API_KEY,
        },
      }
    );
    const tokenPriceResponse = await response.json();
    const tokenPrice = tokenPriceResponse.usdPrice;
    return tokenPrice?.toFixed(8);
  } catch (error) {
    throw error;
  }
};

const getTokenBurnData = async () => {
  try {
    const connection = new Connection(process.env.NEXT_PUBLIC_RPC!);
    const tokenSupplyResponse = await connection.getTokenSupply(
      tokenMintAddress
    );
    const rawTokenSupply = tokenSupplyResponse.value.amount;
    const tokenSupply = rawTokenSupply / Math.pow(10, tokenDecimals);
    let burnedTokens = 1000000000 - tokenSupply;
    const formattedTokens = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(burnedTokens);

    return {
      burnedTokens: formattedTokens,
      tokenSupply,
    };
  } catch (error) {
    throw error;
  }
};

const getTokenUniqueHolders = async () => {
  try {
    const connection = new Connection(process.env.NEXT_PUBLIC_RPC!);

    const tokenAccounts = await connection.getParsedProgramAccounts(
      new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
      {
        filters: [
          {
            dataSize: 165,
          },
          {
            memcmp: {
              offset: 0,
              bytes: tokenMintAddress.toBase58(),
            },
          },
        ],
      }
    );
    const activeTokenAccounts = tokenAccounts.filter(
      (account: {
        account: { data: { parsed: { info: { tokenAmount: any } } } };
      }) => {
        const accountData = account.account.data.parsed.info.tokenAmount;
        return accountData.uiAmount > 0;
      }
    );

    const uniqueHolders = new Set(
      activeTokenAccounts.map(
        (account: {
          account: { data: { parsed: { info: { owner: any } } } };
        }) => account.account.data.parsed.info.owner
      )
    ).size;

    return uniqueHolders;
  } catch (error) {
    throw error;
  }
};

const getNftData = async () => {
  try {
    const response = await fetch(
      `${SOL_SNIPER_URL_PROD}/v1/collections/theory_of_gravity/stats`,
      {
        headers: {
          "X-API-Key": SOL_SNIPER_API_KEY,
        },
        next: {
          revalidate: 60,
        },
      }
    );
    const { floorPrice, supply, uniqueHolders } = await response.json();

    const nftData = {
      floorPrice: floorPrice?.toFixed(4),
      supply,
      uniqueHolders,
    };
    return nftData;
  } catch (error) {
    throw error;
  }
};

export async function GET(req: Request) {
  try {
    const tokenPrice = await getTokenPriceData();
    const { burnedTokens, tokenSupply } = await getTokenBurnData();
    const nftData = await getNftData();
    // const uniqueHolders = await getTokenUniqueHolders();
    return NextResponse.json(
      {
        tokenPrice,
        tokenSupply: Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(tokenSupply),
        tokenMarketCap: new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(tokenSupply * tokenPrice),
        burnedTokens,
        nftData,
        // uniqueHolders,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching token supply:", error);
    return NextResponse.json(
      {
        message: "Error fetching token supply",
      },
      {
        status: 500,
      }
    );
  }
}
