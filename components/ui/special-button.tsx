"use client";

import { useState } from "react";

interface SpecialButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SpecialButton({ children, onClick, className = "" }: SpecialButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [wasClicked, setWasClicked] = useState(false); // keeps track of if button was clicked while hovering

  // tailwind class strings

  // text
  const defaultTextColor = "text-[#04EEFD]";
  const hoverTextColor = "text-orange-600";
  const clickedTextColor = "text-fuchsia-500";

  // border 1
  const defaultBorderColor1 = "border-[#04EEFD]";
  const hoverBorderColor1 = "border-orange-600";
  const clickedBorderColor1 = "border-fuchsia-500";

  // border 2
  const defaultBorderColor2 = "border-[#04EEFD]/50";
  const hoverBorderColor2 = "border-orange-600/50";
  const clickedBorderColor2 = "border-fuchsia-500/50";

  // border 3
  const defaultBorderColor3 = "border-[#04EEFD]/30";
  const hoverBorderColor3 = "border-orange-600/30";
  const clickedBorderColor3 = "border-fuchsia-500/30";

  // border 4
  const defaultBorderColor4 = "border-[#04EEFD]/10";
  const hoverBorderColor4 = "border-orange-600/10";
  const clickedBorderColor4 = "border-fuchsia-500/10";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setWasClicked(false);
      }}
      onMouseDown={() => {
        setIsClicked(true);
        setWasClicked(true);
      }}
      onMouseUp={() => setIsClicked(false)}
      className={`relative ${className} cursor-pointer px-5 py-4 transition-all ${isClicked ? `${clickedTextColor}` : isHovered ? `${hoverTextColor} ${!wasClicked ? "" : "delay-300"}` : `${defaultTextColor} delay-300`}`}
    >
      {children}
      <div
        className={`absolute bottom-0 left-0 h-full w-full rounded-none border-2 transition-all ${isClicked ? `${clickedBorderColor1} scale-[113%]` : isHovered ? `${hoverBorderColor1} scale-[103%] ${!wasClicked ? "" : "delay-300"}` : `${defaultBorderColor1} delay-300`}`}
      ></div>
      <div
        className={`absolute -bottom-1 left-0 h-full w-full rounded-none border-2 transition-all ${isClicked ? `${clickedBorderColor2} scale-[110%] delay-100` : isHovered ? `${hoverBorderColor2} scale-[100%] ${!wasClicked ? "delay-100" : "delay-200"}` : `${defaultBorderColor2} scale-[97%] delay-200`}`}
      ></div>
      <div
        className={`absolute -bottom-2 left-0 h-full w-full rounded-none border-2 transition-all ${isClicked ? `${clickedBorderColor3} scale-[107%] delay-200` : isHovered ? `${hoverBorderColor3} scale-[97%] ${!wasClicked ? "delay-200" : "delay-100"}` : `${defaultBorderColor3} scale-[94%] delay-100`}`}
      ></div>
      <div
        className={`absolute -bottom-3 left-0 h-full w-full rounded-none border-2 transition-all ${isClicked ? `${clickedBorderColor4} scale-[104%] delay-300` : isHovered ? `${hoverBorderColor4} scale-[94%] ${!wasClicked ? "delay-300" : ""}` : `${defaultBorderColor4} scale-[91%]`}`}
      ></div>
    </button>
  );
}
