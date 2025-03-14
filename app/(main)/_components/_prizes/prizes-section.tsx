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
        imageSrc="retro-console.png"
        imageSide="left"
      />
      <Prize title="AI TRACK WINNER" description="1 TB Portable SSD" imageSrc="crucial-ssd.png" imageSide="right" />
      <Prize title="CYBER TRACK WINNER" description="8GB Raspberry Pi 5" imageSrc="raspberry-pi.png" imageSide="left" />
      <Prize
        title="HEALTH TRACK WINNER"
        description="Keychron K4 Wireless Keyboard"
        imageSrc="keychron-k4.png"
        imageSide="right"
        className="py-6"
      />
      <Prize
        title="SUSTAINABILITY TRACK WINNER"
        description="Lego Piranha Plant"
        imageSrc="piranha-plant.png"
        imageSide="left"
      />
    </div>
  );
};

export default PrizesSection;
