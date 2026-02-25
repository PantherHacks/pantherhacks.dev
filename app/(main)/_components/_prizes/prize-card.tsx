"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import "./prize.css";

interface PrizeCardProps {
  trackName: string;
  prizeItem: string;
  imageSrc: string;
  accentColor: string;
}

export default function PrizeCard({ trackName, prizeItem, imageSrc, accentColor }: PrizeCardProps) {
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
    <div
      className="prize-card-wrapper"
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      <div
        ref={cardRef}
        className={`prize-card${hovered ? " prize-card-hovered" : ""}`}
        style={{
          transform: hovered
            ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(0.92)`
            : "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
          transition: hovered ? "transform 0.08s linear" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <div
          className="holo-foil"
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
          className="card-accent-strip"
          style={{
            background: accentColor,
            boxShadow: `0 0 8px ${accentColor}, 0 0 18px ${accentColor}70`,
          }}
        />

        <div className="card-image-area">
          <Image
            src={`/images/prizes/${imageSrc}`}
            alt={prizeItem}
            width={0}
            height={0}
            className="card-img"
            unoptimized
            draggable={false}
          />
        </div>

        <div className="card-info">
          <div className="card-separator" style={{ background: accentColor, boxShadow: `0 0 5px ${accentColor}60` }} />
          <p className="card-prize-name">{prizeItem}</p>
          <p className="card-track-name" style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}90` }}>
            {trackName}
          </p>
        </div>
      </div>
    </div>
  );
}
