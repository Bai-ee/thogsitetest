export interface NftData {
  floorPrice: string;
  supply: string;
  uniqueHolders: string;
}

export interface ThogGameData {
  tokenPrice: string;
  tokenSupply: string;
  tokenMarketCap: string;
  burnedTokens: string;
  nftData: NftData;
}
