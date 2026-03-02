"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./team-member.css";

interface ITeamMemberProps {
  name: string;
  teamRole: string;
  linkedinLink: string;
  color_hex?: string;
  hueRotation?: number;
}

const TeamMember: React.FC<ITeamMemberProps> = ({
  name,
  teamRole,
  linkedinLink,
  color_hex = "#61D7FF",
  hueRotation = -150,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div
      className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300 w-full sm:w-64 my-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={linkedinLink} target="_blank" className="flex flex-col items-center space-y-5">
        <div
          className={`rounded-full transition-all ${isHovered ? "scale-[95%] translate-y-2" : "scale-125 translate-y-8"}`}
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
            className="w-20 h-20 sm:w-32 sm:h-32 select-none rounded-full transition-all duration-500"
            style={{
              filter: `brightness(1.4) saturate(1.6) hue-rotate(${hueRotation}deg) drop-shadow(0 0 10px ${color_hex}99)`,
            }}
            draggable={false}
            unoptimized
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-2 w-40 sm:w-52 transition-all ${isHovered ? "opacity-100" : "translate-y-2"}`}
          style={{
            background: `${isHovered ? `linear-gradient(to bottom, ${color_hex}55, transparent, ${color_hex}55)` : ""}`,
          }}
        >
          <div
            className={`relative top-0 h-2 transition-all ${isHovered ? "w-full scale-x-[103%]" : "w-24 translate-y-10"}`}
            style={{ backgroundColor: color_hex, boxShadow: `0px 0px 10px 2px ${color_hex}B3` }}
          ></div>
          <p
            className={`team-member-name font-Xirod text-sm sm:text-base text-center transition-all ${isHovered ? "" : "translate-y-10"}`}
            style={{ color: color_hex }}
          >
            {firstName}
            <br />
            {lastName}
          </p>
          <p
            className={`team-member-role font-UbuntuMono text-base sm:text-lg text-center transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}
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
