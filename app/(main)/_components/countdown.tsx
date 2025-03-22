import { useState } from "react";

import { countdownDescriptions } from "@/lib/countdown";
import { hackathonDateInfo } from "@/lib/dates";

const Countdown = () => {
  const hdi = hackathonDateInfo;
  const hackathonStartDate = new Date(
    `${hdi.month.substring(0, 3)} ${hdi.startDay}, ${hdi.year} ${hdi.startHour + ":" + hdi.startMinute}:00`
  ).getTime();
  const hackathonEndDate = new Date(
    `${hdi.month.substring(0, 3)} ${hdi.endDay}, ${hdi.year} ${hdi.endHour + ":" + hdi.endMinute}:00`
  ).getTime();

  const [countdownString, setCountdownString] = useState<string>("");
  const [descriptionString, setDescriptionString] = useState<string>("");
  const [isCountdownHidden, setIsCountdownHidden] = useState<boolean>(false);

  const createCountdownString = (dist: number) => {
    // get values for differences
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dist % (1000 * 60)) / 1000);

    const dayString = `${days == 0 ? "" : days + "d "}`;
    const hourString = `${days == 0 && hours == 0 ? "" : hours + "h "}`;
    const minuteString = `${days == 0 && hours == 0 && minutes == 0 ? "" : minutes + "m "}`;
    const secondString = `${days == 0 && hours == 0 && minutes == 0 ? seconds : seconds + "s"}`;

    return dayString + hourString + minuteString + secondString;
  };

  const updateCountdown = () => {
    // check if hackathon has started or has ended
    const now = new Date().getTime();

    // past both countdown times
    if (hackathonStartDate < now && hackathonEndDate < now) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        clearInterval(interval);
        setIsCountdownHidden(true);
        setDescriptionString(countdownDescriptions.hasEnded);
      } catch (e) {
        console.error(e);
      }
    } else if (hackathonStartDate > now) {
      // update strings for the countdown until the start of the hackathon
      const distance = hackathonStartDate - now;
      setCountdownString(createCountdownString(distance));
      setDescriptionString(countdownDescriptions.toStart);
    } else if (hackathonEndDate > now) {
      const distance = hackathonEndDate - now;
      setCountdownString(createCountdownString(distance));
      setDescriptionString(countdownDescriptions.toEnd);
    }
  };

  const interval = setInterval(updateCountdown, 1000);

  return (
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <h2
        className={`text-3xl sm:text-5xl md:text-6xl font-TangoSansBold text-primary${isCountdownHidden ? " hidden" : ""}`}
      >
        {countdownString}
      </h2>
      <h3 className="text-3xl">{descriptionString}</h3>
    </div>
  );
};

export default Countdown;
