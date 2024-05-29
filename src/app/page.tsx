import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import banerImage from "../../public/images/thoggame/Banner.png";
import thogBurn from "../../public/images/thoggame/thogBurn.png";
import thogJumpText from "../../public/images/thoggame/thogtext.gif";
// import thogImage from "../../public/images/thoggame/thog.jpg";
import thogPfps from "../../public/images/thoggame/thogPFPs.gif";
// import grassSection2 from "../../public/images/thoggame/grassSection2.png";
import grass2 from "../../public/images/thoggame/grass2.png";
import dirt from "../../public/images/thoggame/dirt.png";
import { ButtonThog, ButtonXxl, ThogDataText } from "@/components/server";
import { ThogGameData } from "@/interfaces";

import Head from 'next/head';
import DraggableImage from '../components/server/DraggableImage';

export const revalidate = 60;

const karmaticArcade = localFont({
  src: "../../public/fonts/KarmaticArcade.ttf",
});
const arcade = localFont({
  src: "../../public/fonts/ArcadeAlternate.ttf",
});

const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

async function getData(): Promise<ThogGameData> {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "api/thoggame", {
    method: "GET",
    // cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function ThogGame() {
  const thogData: ThogGameData = await getData();
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#21A4F2] justify-center items-center overflow-y-scroll overflow-x-hidden">
      {/* <div className="h-[65px] bg-[#123224] w-full" /> */}
      <div className=" w-[1800px] flex justify-center">
        <Image
          src={banerImage}
          alt="Thog Mint Banner"
          className="h-full"
          style={{
            objectFit: "cover",
            maxHeight: "100%",
          }}
          priority
          placeholder="blur"
        />
      </div>
      {/* Thog game */}
      <div className="h-[1728px] w-full relative flex flex-col items-center gap-6">
        <h1
          className={`text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ${karmaticArcade.className}`}
        >
          THEORY OF <br />
          GRAVITY
        </h1>
        <p className="text-[25px] lg:text-[30px] flex gap-2 items-center">
          OFFICIAL
          <span className="bg-white text-[#568B06] border border-[#568B06] rounded-lg lg:rounded-xl px-2 lg:px-3">
            THOG
          </span>
          LINKS
        </p>
        <div className="flex flex-col gap-2">
          <ButtonThog
            href="https://dexscreener.com/solana/5fqj7wh5qgqen7nb6vjtod8hpgzk5zhvdra17kwabtw8"
            text="Token"
            className={karmaticArcade.className}
          />
          <ButtonThog
            href="https://www.sniper.xyz/collection/theory_of_gravity"
            text="NFT"
            className={karmaticArcade.className}
          />

          <ButtonThog
            href="https://t.me/thogxyz"
            text="TLGRM"
            className={karmaticArcade.className}
          />
          <ButtonThog
            href="https://x.com/THOGonSOL"
            text="X"
            className={karmaticArcade.className}
          />
        </div>

        <Image
          src={thogJumpText}
          alt="Thog Jump Text"
          className="w-auto sm:block sm:w-[554px] absolute z-10 bottom-[670px] px-2 sm:px-5"
        />

        <div className="absolute bottom-[470px]">
          <ButtonXxl
            href={"/jumpgame/index.html"}
            text="PLAY NOW"
            className={karmaticArcade.className}
          />
        </div>

              {/* <main style={styles.main}> */}
        <DraggableImage />
      {/* </main> */}

        <Image
          src="/images/thoggame/thog_rainbo.png"
          alt="section 1 background"
          fill
          sizes="(max-width: 1800px) 1800px, 100vw"
          quality={100}
          priority
          className="object-cover "
        />

      </div>

      {/* Thog Section */}
      <div className="w-full bg-[#118146] relative flex flex-col items-center gap-8">
        <p
          className={`text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ${karmaticArcade.className} pt-20`}
        >
          THOG
          <br />
          NFT
        </p>
        <Image src={thogPfps} alt="Thog NFT" className="px-5 w-[554px]" />

        <ThogDataText
          className={karmaticArcade.className}
          title="Floor Price"
          price={thogData.nftData.floorPrice}
        />
        <ThogDataText
          className={karmaticArcade.className}
          title="Owners"
          price={thogData.nftData.uniqueHolders}
        />
        <ThogDataText
          className={karmaticArcade.className}
          title="ITEMS"
          price={thogData.nftData.supply.toString()}
        />

        <ButtonThog
          href="https://www.sniper.xyz/collection/theory_of_gravity"
          text="GET NFT"
          className={karmaticArcade.className}
        />
        <Image
          src={grass2}
          alt="grass image"
          sizes="(max-width: 1800px) 1800px, 100vw"
          className="w-full h-[100px] object-cover"
        />
        {/* <Image
          src="/images/thoggame/section2.png"
          alt="section 2 background"
          fill
          sizes="(max-width: auto) 100vw, 1800px"
          quality={100}
          priority
          className="object-cover"
        /> */}
      </div>
      {/* Token Section */}
      <div className="w-full bg-[#919191] relative flex flex-col items-center gap-12 pt-20">
        <p
          className={`text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ${karmaticArcade.className} `}
        >
          <span className="font-serif sm:text-[55px] lg:text-[65px]">$</span>
          THOG
          <br />
          TOKEN
        </p>

        <div className="flex flex-col gap-8 text-center items-center">
          <ThogDataText
            className={karmaticArcade.className}
            title="Price"
            price={thogData.tokenPrice}
          >
            <div
              className={`text-[24px] sm:text-[34px] mt-1.5 sm:mt-2 ${arcade.className}`}
            >
              {thogData.tokenPrice}
            </div>
          </ThogDataText>
          <ThogDataText
            className={karmaticArcade.className}
            title="Market Cap"
            price={thogData.tokenMarketCap}
          >
            <div
              className={`text-[24px] sm:text-[34px] mt-1.5 sm:mt-2 ${arcade.className}`}
            >
              {thogData.tokenMarketCap}
            </div>
          </ThogDataText>
          {/* <ThogDataText
          className={karmaticArcade.className}
          title="Owners"
          price="3333"
        /> */}
          <ThogDataText
            className={karmaticArcade.className}
            title="Supply"
            price={thogData.tokenSupply}
          >
            <div
              className={`text-[24px] sm:text-[34px] mt-1.5 sm:mt-2 ${arcade.className}`}
            >
              {thogData.tokenSupply}
            </div>
          </ThogDataText>
        </div>

        <ButtonThog
          href="https://dexscreener.com/solana/5fqj7wh5qgqen7nb6vjtod8hpgzk5zhvdra17kwabtw8"
          text="GET TOKEN"
          className={karmaticArcade.className}
        />
        <Image
          src={dirt}
          alt="grass image"
          sizes="(max-width: 1800px) 1800px, 100vw"
          className="w-full h-[100px] object-cover "
        />
        {/* <Image
          src="/images/thoggame/section3.png"
          alt="birt section background thogs"
          fill
          sizes="(max-width: auto) 100vw, 1800px"
          quality={100}
          priority
          className="object-cover"
        /> */}
      </div>
      {/* Burn Section */}
      <div className="w-full bg-[#653C20] relative flex flex-col items-center gap-12 py-20">
        <p
          className={`text-[38px] sm:text-[50px] lg:text-[60px] text-[#E84524] drop-shadow-2xl text-center leading-tight ${karmaticArcade.className} `}
        >
          BURNT
          <br />
          TOKENS
        </p>

        <Image src={thogBurn} alt="Thog Burn" className="px-5" />

        <p className="text-[25px] lg:text-[30px] flex gap-3 items-center">
          TOTAL
          <span className="bg-white text-[#FF0000] border border-[#FF0000] rounded-lg lg:rounded-xl px-2 lg:px-3">
            BURNT
          </span>
          TO DATE
        </p>

        <p
          className={`text-[30px] lg:text-[40px] text-[#E84524] flex gap-2 items-center ${arcade.className}`}
        >
          {thogData.burnedTokens}
        </p>

        {/* <ButtonThog
          href="https://discord.gg/thog"
          text="Burn"
          buttonColor="red"
          className={karmaticArcade.className}
        /> */}

        {/* <Image
          src="/images/thoggame/section4.png"
          alt="Burn section background thogs"
          fill
          sizes="(max-width: auto) 100vw, 1800px"
          quality={100}
          className="object-cover"
          priority
        /> */}

        {/* <ButtonXxl
          href="https://discord.gg/thog"
          text="Burn"
          buttonColor="red"
          className={karmaticArcade.className}
        /> */}
      </div>
      {/* <div className="h-[65px] bg-[#123224] w-full" /> */}
    </div>
  );
}

export default ThogGame;
