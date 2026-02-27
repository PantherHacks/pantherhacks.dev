"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import "./prize.css";

import { cn } from "@/lib/utils";

interface PrizeCardProps {
  isEmpty?: boolean;
  trackName?: string;
  prizeItem?: string;
  imageSrc?: string;
  accentColor?: string;
  className?: string;
}

export default function PrizeCard({
  isEmpty = false,
  trackName,
  prizeItem,
  imageSrc,
  accentColor,
  className,
}: PrizeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mx, setMx] = useState(50);
  const [my, setMy] = useState(50);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = (e.clientX - left) / width;
    const ny = (e.clientY - top) / height;
    setTilt({ x: (ny - 0.5) * -24, y: (nx - 0.5) * 24 });
    setMx(nx * 100);
    setMy(ny * 100);
  }

  function onLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    setMx(50);
    setMy(50);
  }

  const shimmerAngle = mx * 1.8 + 45;

  return (
    <>
      {!isEmpty ? (
        <div
          className={cn("flex-1 basis-0 min-w-[130px] max-w-[200px] flex items-stretch", className)}
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
        >
          <div
            ref={cardRef}
            className={cn(
              "prize-card relative w-full aspect-[2/3] rounded-[10px] overflow-hidden cursor-pointer will-change-transform flex flex-col",
              hovered && "prize-card-hovered"
            )}
            style={{
              transform: hovered
                ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(0.92)`
                : "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
              transition: hovered ? "transform 0.08s linear" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-[10px]"
              style={{
                opacity: hovered ? 0.38 : 0.06,
                background: `
              radial-gradient(circle at ${mx}% ${my}%, rgba(255,255,255,0.18) 0%, transparent 55%),
              linear-gradient(
                ${shimmerAngle}deg,
                rgba(255,0,100,0.7) 0%,
                rgba(255,130,0,0.7) 14%,
                rgba(250,230,0,0.65) 28%,
                rgba(0,255,120,0.6) 42%,
                rgba(0,170,255,0.7) 57%,
                rgba(110,0,255,0.7) 71%,
                rgba(255,0,180,0.7) 85%,
                rgba(255,0,100,0.7) 100%
              )
            `,
                transition: hovered ? "opacity 0.1s ease" : "opacity 0.4s ease",
              }}
            />

            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-[5]"
              style={{
                background: accentColor,
                boxShadow: `0 0 8px ${accentColor}, 0 0 18px ${accentColor}70`,
              }}
            />

            <div className="flex-1 flex items-center justify-center overflow-hidden z-[2] px-2 pt-3">
              <Image
                src={`/images/prizes/${imageSrc}`}
                alt={prizeItem || "An image of a prize"}
                width={0}
                height={0}
                className="card-img !w-auto !h-full max-w-full max-h-full object-contain select-none pointer-events-none"
                unoptimized
                draggable={false}
              />
            </div>

            <div className="card-info px-[10px] pt-2 pb-[10px] flex flex-col items-center gap-[3px] z-[3]">
              <div className="w-full overflow-hidden">
                <p
                  className="card-prize-ticker-reverse font-Xirod text-[10px] tracking-[0.1em] uppercase leading-[1.2] select-none"
                  style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}90` }}
                >
                  {trackName}&nbsp;◆&nbsp;{trackName}&nbsp;◆&nbsp;
                </p>
              </div>
              <div
                className="w-4/5 h-px mb-1 opacity-80"
                style={{ background: accentColor, boxShadow: `0 0 5px ${accentColor}60` }}
              />
              <div className="w-full overflow-hidden">
                <p className="card-prize-ticker font-UbuntuMonoBold font-bold text-[10px] text-[#ddd8f0] leading-[1.3] uppercase tracking-[0.04em] select-none">
                  {prizeItem}&nbsp;◆&nbsp;{prizeItem}&nbsp;◆&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={cn("flex-1 basis-0 min-w-[130px] max-w-[200px] flex items-stretch", className)}>
          <div className="prize-card prize-card-empty w-full aspect-[2/3] rounded-[10px] relative overflow-hidden flex flex-col opacity-60">
            <div className="null-scanbeam" />

            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-[5]"
              style={{
                background: "rgba(60, 10, 10, 0.8)",
                boxShadow: "0 0 6px rgba(80, 10, 10, 0.5)",
              }}
            />

            <div className="flex-1 flex flex-col items-center justify-center z-[2] gap-1 px-2">
              <p
                className="null-flicker font-UbuntuMono text-[16px] tracking-[0.15em] select-none"
                style={{ color: "rgba(110, 45, 170, 0.75)", textShadow: "0 0 14px rgba(90, 30, 150, 0.5)" }}
              >
                [ NULL ]
              </p>
              <p
                className="font-Xirod text-[7px] tracking-[0.25em] uppercase select-none mt-[2px]"
                style={{ color: "rgba(90, 35, 130, 0.5)" }}
              >
                SLOT VACANT
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
