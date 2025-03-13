import React, { FC } from "react";
import Image from "next/image";

import "./prize.css";

interface PrizeProps {
  title: string;
  description: string;
  imageSrc: string;
  imageSide?: "left" | "right";
}

const Prize: FC<PrizeProps> = ({ title, description, imageSrc, imageSide = "left" }) => {
  return (
    <div
      className={`flex ${imageSide == "left" ? "flex-row" : "flex-row-reverse"} justify-center items-center gap-x-2 w-full`}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={0}
        height={0}
        className="w-44 max-w-64 prize-image transform-gpu"
        draggable="false"
      />
      <div className={`flex flex-col items-center justify-center text-center gap-y-2`}>
        <h2 className="text-2xl font-bold font-TangoSansBold text-primary">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Prize;
