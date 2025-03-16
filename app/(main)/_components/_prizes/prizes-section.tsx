import React, { useState } from "react";
import Image from "next/image";

import Prize from "@/app/(main)/_components/_prizes/prize";

const PrizesSection = () => {
  const [pantherHovered, setPantherHovered] = useState(false);
  return (
    <div
      id="prizes"
      className="relative flex flex-col w-full items-center justify-end gap-y-8 sm:gap-y-6 md:gap-y-4 pt-40 px-8 md:px-20 lg:px-32 overflow-x-clip py-40"
    >
      <div className="flex flex-col items-center justify-center text-center gap-y-4">
        <h2 className="font-TangoSansBold text-6xl  text-primary pb-10">Prizes</h2>
        <p>One per winning team member!</p>
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
      <Image
        src="/images/panther/panther.svg"
        alt="A panther with a Chapman bandana."
        width={100}
        height={100}
        className={`hidden md:block w-96 h-96 absolute -right-10 translate-y-[15rem] select-none overflow-x-clip drop-shadow-md ${pantherHovered ? "scale-105" : "scale-100"} transition-transform duration-150`}
        draggable={false}
        onMouseEnter={() => setPantherHovered(true)}
        onMouseLeave={() => setPantherHovered(false)}
      />
      <p
        className={`hidden md:block absolute right-56 font-bold italic transition-opacity duration-150 select-none ${pantherHovered ? "opacity-100" : "opacity-0"}`}
      >
        Meow!
      </p>
      <Image
        src="/images/panther/panther.svg"
        alt="A panther with a Chapman bandana."
        width={100}
        height={100}
        className="md:hidden block w-48 h-48 absolute translate-y-[12rem] select-none overflow-x-clip drop-shadow-md"
        draggable={false}
      />
    </div>
  );
};

export default PrizesSection;
