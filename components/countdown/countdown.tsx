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
    <div className="countdown-frame">
      <span className="countdown-corner tl" />
      <span className="countdown-corner tr" />
      <span className="countdown-corner bl" />
      <span className="countdown-corner br" />
      <div className="flex flex-col gap-y-2 justify-center items-center">
        {segments === null ? (
          <Skeleton className={`${isLarge ? "w-[350px] sm:w-[550px] h-[4rem]" : "w-[250px] sm:w-[350px] h-[3rem]"}`} />
        ) : concluded ? (
          <h2
            className={`text-center mx-10 font-DSDigital ${colorClass} ${isLarge ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl sm:text-6xl md:text-6xl"}`}
            style={{ minHeight: isLarge ? "4rem" : "3rem" }}
          >
            {countdownDescriptions.hasEnded}
          </h2>
        ) : (
          <h2
            className={`font-DSDigital countdown-text-glow ${colorClass} ${isLarge ? "text-5xl sm:text-7xl md:text-[7rem] lg:text-9xl" : "text-4xl sm:text-6xl md:text-6xl"}`}
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
        {isLarge && <div className="flex h-16 w-[110%] countdown-glow -translate-y-14 -mb-10"></div>}
        {description === null ? (
          <Skeleton
            className={`bg-white/20 ${isLarge ? "w-[300px] sm:w-[500px] h-[3.5rem]" : "w-[200px] sm:w-[300px] h-[2.5rem]"}`}
          />
        ) : concluded ? (
          <h3
            className={`text-center font-UbuntuMonoBold text-primary ${isLarge ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl md:text-3xl"}`}
            style={{ minHeight: isLarge ? "3.5rem" : "2.5rem" }}
          >
            Thank you for participating!
          </h3>
        ) : (
          <h3
            className={`description-text-glow text-primary/70 px-6 text-center font-DSDigital tracking-[0.1em] ${isLarge ? "text-3xl sm:text-4xl md:text-5xl" : "text-lg sm:text-2xl md:text-3xl"}`}
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
