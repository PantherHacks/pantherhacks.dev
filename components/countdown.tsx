import React, { useEffect, useState } from "react";

import { countdownDescriptions } from "@/lib/countdown";
import { applicationDateInfo, hackathonDateInfo } from "@/lib/dates";

interface CountdownProps {
  dark?: boolean;
}

const Countdown: React.FC<CountdownProps> = ({ dark = false }) => {
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

  const [countdownString, setCountdownString] = useState<string>("");
  const [descriptionString, setDescriptionString] = useState<string>("");
  const [hackathonConcluded, setHackathonConcluded] = useState<boolean>(false);

  const createCountdownString = (dist: number) => {
    // get values for differences
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dist % (1000 * 60)) / 1000);

    const dayString = `${days == 0 ? "" : days + "d "}`;
    const hourString = `${days == 0 && hours == 0 ? "" : hours + "h "}`;
    const minuteString = `${days == 0 && hours == 0 && minutes == 0 ? "" : minutes + "m "}`;
    const secondString = `${seconds}s`;

    return dayString + hourString + minuteString + secondString;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updateCountdown = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })).getTime(); // converts user's date to PST to compare

      if (hackathonStartDate < now && hackathonEndDate < now && applicationSubmissionDate < now) {
        clearInterval(intervalId!); // clear interval
        setHackathonConcluded(true);
        setDescriptionString(countdownDescriptions.hasEnded);
      } else if (applicationSubmissionDate > now) {
        const distance = applicationSubmissionDate - now;
        setCountdownString(createCountdownString(distance));
        setDescriptionString(countdownDescriptions.toApplicationDue);
      } else if (hackathonStartDate > now) {
        const distance = hackathonStartDate - now;
        setCountdownString(createCountdownString(distance));
        setDescriptionString(countdownDescriptions.toStart);
      } else if (hackathonEndDate > now) {
        const distance = hackathonEndDate - now;
        setCountdownString(createCountdownString(distance));
        setDescriptionString(countdownDescriptions.toEnd);
      }
    };

    // interval on mount
    intervalId = setInterval(updateCountdown, 1000);

    // clear interval on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [hackathonStartDate, hackathonEndDate, applicationSubmissionDate]);

  return (
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <h2
        className={`text-3xl sm:text-5xl md:text-5xl font-TangoSansBold ${dark ? "text-white" : "text-primary"} ${hackathonConcluded ? " hidden" : ""}`}
      >
        {countdownString}
      </h2>
      <h3
        className={`px-10 md:px-24 text-xl sm:text-2xl md:text-3xl max-w-[50rem] text-center${hackathonConcluded ? " font-TangoSansBold text-primary" : ""}`}
      >
        {descriptionString}
      </h3>
    </div>
  );
};

export default Countdown;
