import { useEffect, useState } from "react";
import Image from "next/image";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

import { Separator } from "@/components/ui/separator";
import { hackathonDateInfo } from "@/lib/dates";
import { liveScheduleSpreadsheetID } from "@/lib/links";
import EventCard from "./event-card";
import { CalendarEvent } from "./schedule-helpers";

const ScheduleSection = () => {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const fetchCSV = async () => {
    try {
      const parser = new PublicGoogleSheetsParser(liveScheduleSpreadsheetID, { useFormat: true });

      const data = await parser.parse();

      setCalendarEvents(
        data
          .filter((event) => event.isHidden !== "TRUE")
          .map((event) => ({
            name: event.eventName,
            activityType: event.eventType,
            location: event.location,
            description: event.description,
            startTimestamp: new Date(event.startTime),
            endTimestamp: new Date(event.endTime),
          }))
      );

      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.error("Error fetching or parsing CSV:", error);
    }
  };

  useEffect(() => {
    fetchCSV();
  }, []);

  return (
    <div id="schedule" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-white pb-10">Schedule</h2>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem] pb-10">
        <span className="font-bold">
          PantherHacks will take place for three days from{" "}
          <span className="font-bold">{hackathonDateInfo.dateString}</span>. Below you can find information on the
          schedule of the event.
        </span>
      </p>
      {isFetching && (
        <Image
          src="/images/oranges/orange-loader.svg"
          width={100}
          height={100}
          unoptimized
          priority
          alt="A spinning orange"
          className="animate-spin duration-1000 w-24 h-24"
        />
      )}
      {!isFetching && calendarEvents.length === 0 && (
        <p className="font-bold text-lg text-red-600">Failed to load events. Please refresh the page and try again!</p>
      )}
      {!isFetching && calendarEvents.length > 0 && (
        <div className="flex flex-col gap-4">
          <Separator />
          {calendarEvents.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              activityType={event.activityType}
              location={event.location}
              description={event.description}
              startTimestamp={event.startTimestamp}
              endTimestamp={event.endTimestamp}
            />
          ))}
          <Separator />
          <p className="text-center italic">That's all folks!</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleSection;
