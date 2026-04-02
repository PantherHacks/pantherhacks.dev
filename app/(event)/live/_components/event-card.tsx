import {
  CalendarPlus2,
  Clock,
  Laptop,
  MapPin,
  MessageCircleQuestion,
  Speech,
  Star,
  Users,
  Utensils,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addToCalendar, CalendarEvent, getCalendarEventColors } from "./schedule-helpers";

import "./live.css";

const EventCard: React.FC<CalendarEvent> = ({
  name,
  activityType,
  location,
  description,
  startTimestamp,
  endTimestamp,
}) => {
  const colors = getCalendarEventColors(activityType);
  const accent = colors[4] ?? "#ffffff";
  const isLive = startTimestamp.getTime() <= Date.now() && endTimestamp.getTime() >= Date.now();

  const startTime = startTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });
  const endTime = endTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });

  return (
    <div className={cn("flex w-full flex-col p-[2px] sm:w-[35rem] md:w-[45rem]", isLive && "highlighted-card")}>
      <div
        className={cn("relative p-6 font-UbuntuMono", colors[2])}
        style={{
          border: `1px solid ${accent}40`,
          boxShadow: `inset 0 0 60px rgba(0,0,0,0.5), 0 0 8px ${accent}18`,
        }}
      >
        {/* Corner brackets */}
        <div
          className="absolute left-0 top-0 h-5 w-5"
          style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute right-0 top-0 h-5 w-5"
          style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 left-0 h-5 w-5"
          style={{ borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 right-0 h-5 w-5"
          style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />

        {/* Top row: badge */}
        <div className="mb-3 flex flex-row items-center justify-center sm:items-start sm:justify-start">
          <Badge
            className={cn(
              "h-6 w-full shrink-0 cursor-default justify-center whitespace-nowrap rounded-none sm:w-auto",
              colors[0]
            )}
          >
            {activityType === "Check-in" && <Clock className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Main Event" && <Star className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Hacking Time" && <Laptop className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Office Hours" && <MessageCircleQuestion className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Food" && <Utensils className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Social Event" && <Users className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType === "Guest Speaker" && <Speech className="mr-1.5 h-3 w-3" aria-hidden="true" />}
            {activityType}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl leading-tight text-white" style={{ textShadow: `0 0 12px ${accent}55` }}>
          {name}
        </h3>

        {/* Separator */}
        <div className="mb-3 h-px" style={{ background: `linear-gradient(to right, ${accent}88, transparent)` }} />

        {/* Description */}
        <p className="mb-2 text-sm leading-relaxed text-white/65 sm:mb-2">{description}</p>

        {/* Footer: location + action */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-2 min-w-0 space-y-1 text-sm text-white/50 sm:mb-auto">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" style={{ color: accent }} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock className="h-4 w-4 shrink-0" style={{ color: accent }} />
              <span>
                {startTime} &ndash; {endTime}
              </span>
            </div>
          </div>
          {isLive ? (
            <div className="flex shrink-0 items-center justify-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#fd021d] duration-1000" />
                <div className="relative inline-flex h-4 w-4 rounded-full bg-[#fd021d]" />
              </div>
              <span className="neon-text-small transform-gpu font-Xirod text-2xl">LIVE</span>
            </div>
          ) : (
            <Button
              className="h-auto w-full shrink-0 cursor-pointer rounded-none border border-primary bg-transparent px-3 py-2 font-UbuntuMono text-xs tracking-wider text-primary transition-all duration-200 hover:rounded-lg hover:bg-primary/10 sm:w-auto"
              onClick={() => addToCalendar(name, activityType, description, location, startTimestamp, endTimestamp)}
            >
              <CalendarPlus2 className="mr-1.5 h-3.5 w-3.5" /> Add to calendar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
