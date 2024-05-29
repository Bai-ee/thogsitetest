import React, { memo } from "react";

function ThogDataText({
  className,
  title,
  price,
  children,
}: {
  className?: string;
  title: string;
  price: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`text-[18px] sm:text-[26px] flex items-center gap-2 ${className}`}
    >
      {title} <span className="font-mono">:</span> {children ? children : price}
    </div>
  );
}

export default memo(ThogDataText);
