import { useEffect, useState } from "react";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

import ScheduleFilters from "@/app/(event)/_live/_components/schedule-filters";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { hackathonDateInfo } from "@/lib/dates";
import { liveScheduleSpreadsheetID } from "@/lib/links";
import EventCard from "./event-card";
import { CalendarEvent } from "./schedule-helpers";

interface EventsByDay {
  [key: string]: CalendarEvent[];
}

const ScheduleSection = () => {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [eventsByDay, setEventsByDay] = useState<EventsByDay>({});
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showPrevEvents, setShowPrevEvents] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<Date | undefined>(undefined);
  const [timeAgo, setTimeAgo] = useState<string>("");

  const fetchCSV = async () => {
    try {
      setIsFetching(true);
      const parser = new PublicGoogleSheetsParser(liveScheduleSpreadsheetID, { useFormat: true });

      const data = await parser.parse();

      const parsedEvents = data
        .filter((event) => event.isHidden !== "TRUE")
        .map((event) => ({
          name: event.eventName,
          activityType: event.eventType,
          location: event.location,
          description: event.description,
          startTimestamp: new Date(event.startTime),
          endTimestamp: new Date(event.endTime),
        }));

      setCalendarEvents(parsedEvents);

      const groupedEvents: EventsByDay = parsedEvents.reduce((acc: EventsByDay, event) => {
        const day = event.startTimestamp.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(event);
        return acc;
      }, {});
      setEventsByDay(groupedEvents);

      const now = new Date(Date.now());
      setLastRefreshed(now);
      setTimeAgo("just now");
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.error("Error fetching or parsing CSV:", error);
    }
  };

  useEffect(() => {
    fetchCSV();
  }, []);

  useEffect(() => {
    if (lastRefreshed) {
      const interval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now.getTime() - lastRefreshed.getTime()) / 1000);

        if (diff === 0) {
          setTimeAgo("just now");
        } else if (diff < 60) {
          setTimeAgo(`${diff} seconds ago`);
        } else if (diff < 3600) {
          setTimeAgo(`${Math.floor(diff / 60)} minutes ago`);
        } else {
          setTimeAgo(`${Math.floor(diff / 3600)} hours ago`);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setTimeAgo("just now");
    }
  }, [lastRefreshed]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastRefreshed) {
        const now = new Date();
        const diff = Math.floor((now.getTime() - lastRefreshed.getTime()) / 1000);

        // Automatically refresh if more than 5 minutes (300 seconds) have passed
        if (diff > 300) {
          fetchCSV();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastRefreshed]);

  return (
    <div id="schedule" className="flex flex-col items-center justify-center w-full py-20">
      <h2 className="font-TangoSansBold text-4xl sm:text-6xl text-white pb-10 mx-4">Schedule</h2>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem] pb-10">
        PantherHacks will take place for three days from{" "}
        <span className="font-bold">{hackathonDateInfo.dateString}</span>. Below you can find information on the
        schedule of the event.
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
        <p className="font-bold text-lg text-red-600 text-center mx-10">
          Failed to load events. Check your connection, refresh the page, and try again!
        </p>
      )}
      {!isFetching && calendarEvents.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center px-10">
          <Separator />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Button className="bg-primary hover:bg-[#83022b] cursor-pointer" onClick={fetchCSV}>
              <RefreshCcw /> Refresh Schedule
            </Button>
            <p className="text-xs ">Last refreshed {timeAgo}</p>
          </div>
          <ScheduleFilters activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
          <div className="flex items-center space-x-2 pt-1">
            <Switch
              id="show-previous-events"
              checked={showPrevEvents}
              onCheckedChange={() => setShowPrevEvents(!showPrevEvents)}
            />
            <Label htmlFor="show-previous-events">Show Past Events</Label>
          </div>
          <Separator />
          {Object.keys(eventsByDay)
            .sort((a, b) => Date.parse(a) - Date.parse(b)) // Sort by date
            .map((day) => {
              // original daily events and get the end of this day
              const originalDailyEvents = eventsByDay[day] || [];
              const endOfDay = new Date(Date.parse(day + " " + hackathonDateInfo.year));
              endOfDay.setHours(23, 59, 59, 999);
              const isDayOver = endOfDay.getTime() < Date.now();

              // filter events by type of event
              const dailyEventsFilteredByType = originalDailyEvents.filter(
                (event) => activeFilters.length === 0 || activeFilters.includes(event.activityType)
              );

              // filter events by time
              const futureOrCurrentFilteredEvents = showPrevEvents
                ? dailyEventsFilteredByType // If showing previous, use all type-filtered events
                : dailyEventsFilteredByType.filter(
                    // filter by whether event has passed
                    (event) => event.endTimestamp.getTime() >= Date.now()
                  );

              // don't render day if not showing previous events and day is over
              if (!showPrevEvents && isDayOver) {
                return null;
              }

              // hide the day if there are no future events left (and not showing previous events)
              const hideBecauseNoFutureEventsLeft = !showPrevEvents && futureOrCurrentFilteredEvents.length === 0;

              // still show the day despite no future events if filter is what hides the event
              const showDespiteNoFutureEvents =
                hideBecauseNoFutureEventsLeft &&
                dailyEventsFilteredByType.length === 0 &&
                originalDailyEvents.length > 0;

              // combine previous two checks to render nothing if no future events and filters weren't the cause
              if (hideBecauseNoFutureEventsLeft && !showDespiteNoFutureEvents) {
                return null;
              }

              // get events to be rendered
              const eventsToRender = futureOrCurrentFilteredEvents;

              return (
                <div
                  key={day}
                  aria-label={`Events for ${day}`}
                  className="w-full flex flex-col justify-center items-center gap-4 pt-4 pb-3"
                >
                  <h3 className="font-bold text-2xl">{day}</h3>
                  <Separator className="bg-white/20" />
                  {eventsToRender.length > 0 ? (
                    // show events if there are events to render
                    eventsToRender.map((event, index) => (
                      <EventCard
                        key={`${day}-${index}`}
                        name={event.name}
                        activityType={event.activityType}
                        location={event.location}
                        description={event.description}
                        startTimestamp={event.startTimestamp}
                        endTimestamp={event.endTimestamp}
                      />
                    ))
                  ) : // if no events to render
                  originalDailyEvents.length === 0 ? (
                    <p className="text-white/60 italic text-center">No scheduled events for this day.</p>
                  ) : dailyEventsFilteredByType.length === 0 ? ( // if no daily events filtered by type for the day
                    <p className="text-white/60 italic text-center">
                      No events matching the selected filters for this day.
                    </p>
                  ) : dailyEventsFilteredByType.length === 0 ? ( // Double check if filters are the cause of no events being shown
                    <p className="text-white/60 italic text-center">
                      No events matching the selected filters for this day.
                    </p>
                  ) : (
                    <p className="text-white/60 italic text-center">No remaining events for this day.</p>
                  )}
                </div>
              );
            })}
          {!showPrevEvents &&
            Object.keys(eventsByDay).every((day) => {
              const dailyEvents = eventsByDay[day] || [];
              return dailyEvents.every((event) => event.endTimestamp.getTime() < Date.now());
            }) && <p className="font-bold text-lg text-center mx-10">There are no more upcoming events.</p>}
          <Separator />
          <p className="text-center italic font-bold text-lg text-white/80">That's all folks!</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleSection;
