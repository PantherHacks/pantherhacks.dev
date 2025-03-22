import { useState } from "react";

import { hackathonDateInfo } from "@/lib/dates";

const Countdown = () => {
  const hdi = hackathonDateInfo;
  const hackathonStartDate = new Date(
    `${hdi.month.substring(0, 2)} ${hdi.startDay}, ${hdi.year} ${hdi.startHour + ":" + hdi.startMinute}:00`
  ).getTime();
  const hackathonEndDate = new Date(
    `${hdi.month.substring(0, 2)} ${hdi.endDay}, ${hdi.year} ${hdi.endHour + ":" + hdi.endMinute}:00`
  ).getTime();

  const [countdownString, setCountdownString] = useState<string>("");
  const [descriptionString, setDescriptionString] = useState<string>("");

  const updateCountdown = () => {
    // check if hackathon has started or has ended
    const now = new Date().getTime();

    // past both countdown times
    if (hackathonStartDate < now && hackathonEndDate < now) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        clearInterval(interval);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const interval = setInterval(updateCountdown, 1000);

  return (
    <div className="flex flex-col gap-y-2">
      <h2></h2>
    </div>
  );
};

export default Countdown;
