import React, { useEffect, useState } from "react";

import { countdownDescriptions } from "@/lib/countdown";
import { applicationDateInfo, hackathonDateInfo } from "@/lib/dates";
import { Skeleton } from "../ui/skeleton";

import "./countdown.css";

interface CountdownProps {
  dark?: boolean;
  size?: "default" | "large";
}

type Segment = { value: number; unit: string };

const getSegments = (dist: number): Segment[] => {
  const days = Math.floor(dist / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dist % (1000 * 60)) / 1000);

  const segments: Segment[] = [];
  if (days > 0) segments.push({ value: days, unit: "d" });
  if (days > 0 || hours > 0) segments.push({ value: hours, unit: "h" });
  if (days > 0 || hours > 0 || minutes > 0) segments.push({ value: minutes, unit: "m" });
  segments.push({ value: seconds, unit: "s" });
  return segments;
};

const Countdown: React.FC<CountdownProps> = ({ dark = false, size = "default" }) => {
  const hdi = hackathonDateInfo;
  const adi = applicationDateInfo;

  const hackathonStartDate = new Date(
    `${hdi.month.substring(0, 3)} ${hdi.startDay}, ${hdi.year} ${hdi.startHour < 12 ? hdi.startHour + 12 : hdi.startHour}:${hdi.startMinute}:00`
  ).getTime();
  const hackathonEndDate = new Date(
    `${hdi.month.substring(0, 3)} ${hdi.endDay}, ${hdi.year} ${hdi.endHour < 12 ? hdi.endHour + 12 : hdi.endHour}:${hdi.endMinute}:00`
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

  const [segments, setSegments] = useState<Segment[] | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [concluded, setConcluded] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })).getTime();

      if (now > hackathonStartDate && now > hackathonEndDate && now > applicationSubmissionDate) {
        setConcluded(true);
        setSegments([]);
        setDescription(" ");
      } else if (applicationSubmissionDate > now) {
        setSegments(getSegments(applicationSubmissionDate - now));
        setDescription(countdownDescriptions.toApplicationDue);
      } else if (hackathonStartDate > now) {
        setSegments(getSegments(hackathonStartDate - now));
        setDescription(countdownDescriptions.toStart);
      } else {
        setSegments(getSegments(hackathonEndDate - now));
        setDescription(countdownDescriptions.toEnd);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [hackathonStartDate, hackathonEndDate, applicationSubmissionDate]);

  const isLarge = size === "large";
  const colorClass = dark ? "text-primary" : "text-primary";

  return (
    <div
      className={`countdown-frame ${isLarge ? "flex w-full max-w-[900px] flex-1 items-center justify-center backdrop-blur-[4px]" : "mx-12 max-w-[800px] md:mx-16 lg:mx-20 xl:mx-20"}`}
    >
      <span className={`countdown-corner tl ${isLarge ? "hidden" : ""}`} />
      <span className={`countdown-corner tr ${isLarge ? "hidden" : ""}`} />
      <span className={`countdown-corner bl ${isLarge ? "hidden" : ""}`} />
      <span className={`countdown-corner br ${isLarge ? "hidden" : ""}`} />
      <span className={`countdown-line l ${isLarge ? "" : "hidden"}`} />
      <span className={`countdown-line t ${isLarge ? "" : "hidden"}`} />
      <span className={`countdown-line r ${isLarge ? "" : "hidden"}`} />
      <span className={`countdown-line b ${isLarge ? "" : "hidden"}`} />
      <div className="flex flex-col items-center justify-center gap-y-2">
        {segments === null ? (
          <Skeleton className={`${isLarge ? "h-[4rem] w-[350px] sm:w-[550px]" : "h-[3rem] w-[250px] sm:w-[350px]"}`} />
        ) : concluded ? (
          <h2
            className={`mx-10 text-center font-Xirod ${colorClass} ${isLarge ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl md:text-4xl"}`}
            style={{ minHeight: isLarge ? "4rem" : "3rem" }}
          >
            {countdownDescriptions.hasEnded}
          </h2>
        ) : (
          <h2
            className={`countdown-text-glow text-center font-DSDigital ${colorClass} ${isLarge ? "text-5xl sm:text-7xl md:text-8xl lg:text-9xl" : "text-4xl sm:text-6xl md:text-6xl"}`}
            style={{ minHeight: isLarge ? "4rem" : "3rem" }}
          >
            {segments.map(({ value, unit }, i) => (
              <span key={unit}>
                {value}
                <span className="text-[0.65em]">{unit}</span>
                {i < segments.length - 1 && " "}
              </span>
            ))}
          </h2>
        )}
        {description === null ? (
          <Skeleton
            className={`bg-white/20 ${isLarge ? "h-[3.5rem] w-[300px] sm:w-[500px]" : "h-[2.5rem] w-[200px] sm:w-[300px]"}`}
          />
        ) : concluded ? (
          <h3
            className={`text-center font-Xirod text-white ${isLarge ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"}`}
            style={{ minHeight: isLarge ? "3.5rem" : "2.5rem" }}
          >
            Thank you for participating!
          </h3>
        ) : (
          <h3
            className={`description-text-glow px-6 text-center font-DSDigital tracking-[0.1em] text-primary/70 ${isLarge ? "text-3xl sm:text-4xl md:text-5xl" : "text-lg sm:text-2xl md:text-3xl"}`}
            style={{ minHeight: isLarge ? "3.5rem" : "2.5rem" }}
          >
            {description}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Countdown;
