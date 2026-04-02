"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import "./prize.css";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface PrizeCardProps {
  isEmpty?: boolean;
  trackName?: string;
  prizeItem?: string;
  imageSrc?: string;
  accentColor?: string;
  fromTrack?: boolean;
  className?: string;
}

export default function PrizeCard({
  isEmpty = false,
  trackName,
  prizeItem,
  imageSrc,
  accentColor,
  fromTrack,
  className,
}: PrizeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [bouncing, setBouncing] = useState(false);
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

  const cardContent = (
    <div
      className={cn(
        "flex min-w-[130px] max-w-[200px] flex-1 basis-0 items-stretch",
        bouncing && "prize-card-bouncing",
        className
      )}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      onMouseDown={() => {
        setBouncing(false);
        requestAnimationFrame(() => setBouncing(true));
      }}
      onAnimationEnd={() => setBouncing(false)}
    >
      <div
        ref={cardRef}
        className={cn(
          "prize-card relative flex aspect-[2/3] w-full cursor-pointer flex-col overflow-hidden rounded-[10px] will-change-transform",
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
          className="pointer-events-none absolute inset-0 z-10 rounded-[10px]"
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
          className="absolute left-0 right-0 top-0 z-[5] h-[3px]"
          style={{
            background: accentColor,
            boxShadow: `0 0 8px ${accentColor}, 0 0 18px ${accentColor}70`,
          }}
        />

        <div className="z-[2] flex flex-1 items-center justify-center overflow-hidden px-2 pt-3">
          <Image
            src={`/images/prizes/${imageSrc}`}
            alt={prizeItem || "An image of a prize"}
            width={0}
            height={0}
            className="card-img pointer-events-none !h-full max-h-full !w-auto max-w-full select-none object-contain"
            unoptimized
            draggable={false}
          />
        </div>

        <div className="card-info z-[3] flex flex-col items-center gap-[3px] px-[10px] pb-[10px] pt-2">
          <div className="w-full overflow-hidden">
            <p
              className="card-prize-ticker-reverse select-none font-Xirod text-[10px] uppercase leading-[1.2] tracking-[0.1em]"
              style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}90` }}
            >
              {trackName}&nbsp;◆&nbsp;{trackName}&nbsp;◆&nbsp;
            </p>
          </div>
          <div
            className="mb-1 h-px w-4/5 opacity-80"
            style={{ background: accentColor, boxShadow: `0 0 5px ${accentColor}60` }}
          />
          <div className="w-full overflow-hidden">
            <p className="card-prize-ticker select-none font-UbuntuMonoBold text-[10px] font-bold uppercase leading-[1.3] tracking-[0.04em] text-[#ddd8f0]">
              {prizeItem}&nbsp;◆&nbsp;{prizeItem}&nbsp;◆&nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!isEmpty ? (
        fromTrack ? (
          <Link href={`/#${trackName?.toLowerCase()}-track`}>{cardContent}</Link>
        ) : (
          cardContent
        )
      ) : (
        <div className={cn("flex min-w-[130px] max-w-[200px] flex-1 basis-0 items-stretch", className)}>
          <div className="prize-card prize-card-empty relative flex aspect-[2/3] w-full flex-col overflow-hidden rounded-[10px]">
            <div className="null-scanbeam" />

            <div className="absolute left-0 right-0 top-0 z-[5] h-[3px] bg-[rgba(120,20,20,0.9)] shadow-[0_0_8px_rgba(160,20,20,0.7)]" />

            <div className="z-[2] flex flex-1 flex-col items-center justify-center gap-1 px-2">
              <p className="null-flicker select-none font-UbuntuMono text-[16px] tracking-[0.15em] text-[rgba(160,80,240,0.5)] [text-shadow:0_0_16px_rgba(130,60,220,0.8)]">
                [ NULL ]
              </p>
              <p className="mt-[2px] select-none font-Xirod text-[7px] uppercase tracking-[0.25em] text-[rgba(130,70,190,0.5)]">
                SLOT EMPTY
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
