import Image from "next/image";
import React, { memo } from "react";
import Link from "next/link";

import buttonBgRed from "../../../../public/images/thoggame/buttonBgRed.png";
import buttonBg from "../../../../public/images/thoggame/buttonBgXxl.png";
import styles from "@/styles/thoggame.module.css";

function ButtonXxl({
  href,
  text,
  className,
  buttonColor = "green",
}: Readonly<{
  href: string;
  text: "PLAY NOW";
  className?: string;
  buttonColor?: string;
}>) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`w-[355px] h-[123px] relative flex flex-col justify-center items-center cursor-pointer z-10 active:opacity-80 ${styles.xxlButton}`}
    >
      <p
        className={`z-20 text-[40px] uppercase mb-2 text-white ${className} ${styles.xxlButtonText}`}
      >
        {text}
      </p>
      <Image
        src={buttonColor == "green" ? buttonBg : buttonBgRed}
        alt={text}
        className="w-[350px] h-[123px]"
        fill
        sizes="260px"
      />
    </Link>
  );
}

export default memo(ButtonXxl);
