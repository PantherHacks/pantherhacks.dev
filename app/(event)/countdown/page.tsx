"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Maximize, Minimize, Radio } from "lucide-react";
import Confetti from "react-confetti";

import Countdown from "@/components/countdown/countdown";
import { Button } from "@/components/ui/button";
import { applicationDateInfo, hackathonDateInfo } from "@/lib/dates";

const CountdownPage = () => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState<number>(-200);
  const [rotation, setRotation] = useState<number>(0);

  const [hackathonEnded, setHackathonEnded] = useState(false);

  useEffect(() => {
    const updateHackathonStatus = () => {
      const hdi = hackathonDateInfo;
      const adi = applicationDateInfo;

      const hackathonStartDate = new Date(
        `${hdi.month.substring(0, 3)} ${hdi.startDay}, ${hdi.year} ${
          hdi.startHour >= 12 ? hdi.startHour : hdi.startHour + (hdi.startHour === 12 ? 0 : 12)
        }:${hdi.startMinute}:00`
      ).getTime();
      const hackathonEndDate = new Date(
        `${hdi.month.substring(0, 3)} ${hdi.endDay}, ${hdi.year} ${
          hdi.endHour >= 12 ? hdi.endHour : hdi.endHour + (hdi.endHour === 12 ? 0 : 12)
        }:${hdi.endMinute}:00`
      ).getTime();
      const applicationSubmissionDate = new Date(
        `${adi.closeMonth.substring(0, 3)} ${adi.closeDay}, ${adi.closeYear} ${
          adi.pmOrAm === "PM" && adi.closeHour !== 12
            ? adi.closeHour + 12
            : adi.pmOrAm === "AM" && adi.closeHour === 12
              ? 0
              : adi.closeHour
        }:${adi.closeMinute}:00`
      ).getTime();

      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })).getTime();

      if (hackathonStartDate < now && hackathonEndDate < now && applicationSubmissionDate < now) {
        setHackathonEnded(true);
      } else {
        setHackathonEnded(false);
      }
    };

    updateHackathonStatus();

    const intervalId = setInterval(updateHackathonStatus, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowButton(true);
      document.body.style.cursor = "default";
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowButton(false);
        document.body.style.cursor = "none";
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
      document.body.style.cursor = "default";
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

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
    const timeAmountInMilliseconds = Math.floor(Math.random() * (20 * 60 * 1000 - 30 * 1000) + 30 * 1000); // random time between 30 seconds and 20 minutes

    const intervalId = setInterval(() => {
      setPosition(-200);
      animate();
    }, timeAmountInMilliseconds);

    return () => clearInterval(intervalId);
  }, [animate]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      <Confetti
        run={hackathonEnded}
        width={dimensions.width}
        height={dimensions.height}
        colors={["#A50034", "#ED024D", "#FF87AD", "#FFFFFF"]}
      />
      <Image
        src="/images/main-background/building-background.svg"
        alt="Buildings in the background"
        width={100}
        height={100}
        unoptimized
        className="w-full absolute z-0 bottom-0"
        style={{
          filter: `grayscale(1)`,
        }}
      />
      <Link href="/" className="z-10" aria-label="Go to Home Page">
        <Button
          className={`absolute top-4 left-4 px-3 py-2 bg-transparent hover:bg-transparent border border-transparent rounded-none hover:border-primary hover:text-primary transition-all duration-100 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </Button>
      </Link>
      <Link href="/live" aria-label="Go to live page" className="z-10">
        <Button
          className={`absolute top-4 left-16 px-3 py-2 bg-transparent hover:bg-transparent border border-transparent rounded-none hover:border-primary hover:text-primary transition-all duration-100 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <Radio />
        </Button>
      </Link>
      <Button
        className={`absolute top-4 right-4 px-3 py-2 bg-transparent hover:bg-transparent border border-transparent rounded-none hover:border-primary hover:text-primary transition-all duration-100 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <Minimize /> : <Maximize />}
      </Button>
      <div className="z-50">
        <Countdown dark size="large" />
      </div>
      <div
        className="absolute bottom-0 z-50"
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
