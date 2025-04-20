"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

import Countdown from "@/components/countdown";
import { Button } from "@/components/ui/button";

const CountdownPage = () => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const [position, setPosition] = useState<number>(-200);
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowButton(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowButton(false), 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const animate = useCallback(() => {
    const speed = 1;
    const orangeSize = 100;
    const circumference = Math.PI * orangeSize;

    let currentPosition = position;
    let currentRotation = rotation;

    const step = () => {
      currentPosition += speed;
      if (currentPosition > window.innerWidth) {
        setRotation(0);
        return;
      }

      currentRotation += (speed / circumference) * 360;

      setPosition(currentPosition);
      setRotation(currentRotation);

      if (currentPosition <= window.innerWidth) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [position, rotation]);

  useEffect(() => {
    const timeAmountInMiliseconds = Math.floor(Math.random() * (20 * 60 * 1000 - 30 * 1000) + 30 * 1000); // random time between 30 seconds and 20 minutes

    const intervalId = setInterval(() => {
      setPosition(-200);
      animate();
    }, timeAmountInMiliseconds);

    return () => clearInterval(intervalId);
  }, [animate]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <Link href="/">
        <Button
          className={`absolute top-4 left-4 px-3 py-2 bg-transparent hover:bg-[#83022b] transition-opacity duration-300 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </Button>
      </Link>
      <Countdown dark size="large" />
      <div
        className="absolute bottom-0"
        style={{
          left: `${position}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Image src="/images/oranges/orange-loader.svg" alt="Rolling orange" width={200} height={200} unoptimized />
      </div>
    </div>
  );
};

export default CountdownPage;
