import React from "react";

import Prize from "@/app/(main)/_components/_prizes/prize";

const PrizesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 pt-40 px-4 md:w-1/2 md:mx-auto">
      <div className="flex flex-col items-center justify-center text-center gap-y-4">
        <h2 className="font-TangoSansBold text-6xl  text-primary pb-10">Prizes</h2>
        <p className="">One per winning team member!</p>
      </div>
      <Prize
        title="HACKER'S CHOICE AWARD"
        description="Portable Retro Handheld Gaming Console"
        imageSrc="/images/prizes/retro-console.png"
        imageSide="left"
      />
      <Prize
        title="AI TRACK WINNER"
        description="1 TB Portable SSD"
        imageSrc="/images/prizes/crucial-ssd.png"
        imageSide="right"
      />
    </div>
  );
};

export default PrizesSection;
