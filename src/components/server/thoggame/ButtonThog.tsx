import Image from "next/image";
import React, { memo } from "react";
import Link from "next/link";

import buttonBgRed from "../../../../public/images/thoggame/buttonBgRed.png";
import buttonBg from "../../../../public/images/thoggame/buttonBg.png";

function ButtonThog({
  href,
  text,
  className,
  buttonColor = "green",
}: Readonly<{
  href: string;
  text: string;
  className?: string;
  buttonColor?: string;
}>) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-[280px] h-[100px] relative flex flex-col justify-center items-center cursor-pointer z-10 active:opacity-80"
    >
      <p className={`z-20 text-[30px] uppercase mb-2 text-white ${className}`}>
        {text}
      </p>
      <Image
        src={buttonColor == "green" ? buttonBg : buttonBgRed}
        alt={text}
        className="w-[260px] h-[100px]"
        fill
        sizes="260px"
      />
    </Link>
  );
}

export default memo(ButtonThog);
