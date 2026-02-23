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
  color_hex = "#2432ff",
  hueRotation = -150,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div
      className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300 w-44 sm:w-64 my-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={linkedinLink} target="_blank" className="flex flex-col items-center space-y-5">
        <div
          className={`rounded-full transition-all ${isHovered ? "scale-110" : ""}`}
          style={{ boxShadow: `0px 8px 20px 2px ${color_hex}99` }}
        >
          <Image
            src={`/images/team-members/${name.toLowerCase().replace(" ", "-")}.png`}
            width={0}
            height={0}
            alt={`${name}`}
            className="w-24 h-24 sm:w-32 sm:h-32 select-none rounded-full transition-transform duration-500"
            style={{ filter: `brightness(1.4) saturate(1.6) hue-rotate(${hueRotation}deg)` }}
            draggable={false}
            unoptimized
          />
        </div>
        <div
          className="flex flex-col items-center justify-center gap-2 w-40 sm:w-52"
          style={{ background: `linear-gradient(to bottom, ${color_hex}33, transparent, ${color_hex}33)` }}
        >
          <div
            className="relative top-0 w-full h-2"
            style={{ backgroundColor: color_hex, boxShadow: `0px 0px 10px 2px ${color_hex}B3` }}
          ></div>
          <p className="team-member-name font-Xirod text-sm sm:text-base text-center" style={{ color: color_hex }}>
            {firstName}
            <br />
            {lastName}
          </p>
          <p className="team-member-role font-UbuntuMono text-base sm:text-lg text-center">{teamRole}</p>
          <div
            className="relative bottom-0 w-full h-2"
            style={{ backgroundColor: color_hex, boxShadow: `0px 0px 10px 2px ${color_hex}B3` }}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default TeamMember;
