import React, { FC } from "react";
import Image from "next/image";

import "./prize.css";

import { cn } from "@/lib/utils";

interface PrizeProps {
  title: string;
  description: string;
  imageSrc: string;
  imageSide?: "left" | "right";
  className?: string;
}

const Prize: FC<PrizeProps> = ({ title, description, imageSrc, imageSide = "left", className }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-x-2 md:gap-x-8",
        imageSide === "left" ? "flex-row" : "flex-row-reverse",
        className
      )}
    >
      <Image
        src={"/images/prizes/" + imageSrc}
        alt={description}
        width={0}
        height={0}
        className={cn(
          "prize-image w-28 max-w-64 transform-gpu transition-transform duration-300 hover:scale-105 sm:w-40 md:w-44",
          imageSide === "left" ? "hover:-rotate-6" : "hover:rotate-6"
        )}
        draggable="false"
        unoptimized
      />
      <div className="flex flex-col items-center justify-center gap-y-2 text-center">
        <h2 className="font-Xirod text-2xl font-bold text-[#9f1ee5]">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Prize;
