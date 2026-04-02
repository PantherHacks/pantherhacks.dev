"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./team-member.css";

interface ITeamMemberProps {
  name: string;
  teamRole: string;
  url: string;
  color_hex?: string;
  hueRotation?: number;
}

const TeamMember: React.FC<ITeamMemberProps> = ({ name, teamRole, url, color_hex = "#61D7FF", hueRotation = -150 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div
      className="my-2 flex w-full flex-col items-center space-y-4 transition-transform duration-300 sm:w-64 md:hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={url} target="_blank" className="flex flex-col items-center space-y-5">
        <div
          className={`rounded-full transition-all ${isHovered ? "translate-y-2 scale-[95%]" : "translate-y-8 scale-125"}`}
          style={{
            boxShadow: `0px 10px 10px 1px ${color_hex}99`,
            backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent ${isHovered ? "40%" : "70%"}, ${color_hex}55 100%)`,
          }}
        >
          <Image
            src={`/images/team-members/${name.toLowerCase().replace(" ", "-")}.png`}
            width={0}
            height={0}
            alt={`${name}`}
            className="h-20 w-20 select-none rounded-full transition-all duration-500 sm:h-32 sm:w-32"
            style={{
              filter: `brightness(1.4) saturate(1.6) hue-rotate(${hueRotation}deg) drop-shadow(0 0 10px ${color_hex}99)`,
            }}
            draggable={false}
            unoptimized
          />
        </div>
        <div
          className={`flex w-40 flex-col items-center justify-center gap-2 transition-all sm:w-52 ${isHovered ? "opacity-100" : "translate-y-2"}`}
          style={{
            background: `${isHovered ? `linear-gradient(to bottom, ${color_hex}55, transparent, ${color_hex}55)` : ""}`,
          }}
        >
          <div
            className={`relative top-0 h-2 transition-all ${isHovered ? "w-full scale-x-[103%]" : "w-24 translate-y-10"}`}
            style={{ backgroundColor: color_hex, boxShadow: `0px 0px 10px 2px ${color_hex}B3` }}
          ></div>
          <p
            className={`team-member-name text-center font-Xirod text-sm transition-all sm:text-base ${isHovered ? "" : "translate-y-10"}`}
            style={{ color: color_hex }}
          >
            {firstName}
            <br />
            {lastName}
          </p>
          <p
            className={`team-member-role text-center font-UbuntuMono text-base transition-opacity sm:text-lg ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {teamRole}
          </p>
          <div
            className={`relative bottom-0 h-2 opacity-100 transition-all ${isHovered ? "w-full scale-x-[103%]" : "w-24 translate-y-1"}`}
            style={{ backgroundColor: color_hex, boxShadow: `0px 0px 10px 2px ${color_hex}B3` }}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default TeamMember;
