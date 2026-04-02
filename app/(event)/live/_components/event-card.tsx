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
    <div className={cn("flex flex-col p-[2px] w-72 sm:w-[35rem] md:w-[45rem]", isLive && "highlighted-card")}>
      <div
        className={cn("relative p-6 font-UbuntuMono", colors[2])}
        style={{
          border: `1px solid ${accent}40`,
          boxShadow: `inset 0 0 60px rgba(0,0,0,0.5), 0 0 8px ${accent}18`,
        }}
      >
        {/* Corner brackets */}
        <div
          className="absolute top-0 left-0 w-5 h-5"
          style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute top-0 right-0 w-5 h-5"
          style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 left-0 w-5 h-5"
          style={{ borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 right-0 w-5 h-5"
          style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />

        {/* Top row: badge */}
        <div className="mb-3 flex flex-row justify-center items-center sm:justify-start sm:items-start">
          <Badge
            className={cn(
              "h-6 cursor-default whitespace-nowrap rounded-none shrink-0 justify-center w-full sm:w-auto",
              colors[0]
            )}
          >
            {activityType === "Check-in" && <Clock className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Main Event" && <Star className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Hacking Time" && <Laptop className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Office Hours" && <MessageCircleQuestion className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Food" && <Utensils className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Social Event" && <Users className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType === "Guest Speaker" && <Speech className="w-3 h-3 mr-1.5" aria-hidden="true" />}
            {activityType}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-2xl text-white mb-3 leading-tight" style={{ textShadow: `0 0 12px ${accent}55` }}>
          {name}
        </h3>

        {/* Separator */}
        <div className="mb-3 h-px" style={{ background: `linear-gradient(to right, ${accent}88, transparent)` }} />

        {/* Description */}
        <p className="text-white/65 text-sm leading-relaxed mb-2 sm:mb-2">{description}</p>

        {/* Footer: location + action */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="text-white/50 text-sm space-y-1 min-w-0 mb-2 sm:mb-auto">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: accent }} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-4 h-4 shrink-0" style={{ color: accent }} />
              <span>
                {startTime} &ndash; {endTime}
              </span>
            </div>
          </div>
          {isLive ? (
            <div className="flex items-center justify-center gap-2 shrink-0">
              <div className="relative flex justify-center items-center">
                <div className="absolute inline-flex w-3 h-3 bg-[#fd021d] rounded-full animate-ping duration-1000" />
                <div className="relative inline-flex w-4 h-4 bg-[#fd021d] rounded-full" />
              </div>
              <span className="neon-text-small font-Xirod text-2xl transform-gpu">LIVE</span>
            </div>
          ) : (
            <Button
              className="w-full sm:w-auto shrink-0 px-3 py-2 h-auto bg-transparent text-primary border border-primary rounded-none hover:rounded-lg hover:bg-primary/10 cursor-pointer font-UbuntuMono text-xs tracking-wider transition-all duration-200"
              onClick={() => addToCalendar(name, activityType, description, location, startTimestamp, endTimestamp)}
            >
              <CalendarPlus2 className="w-3.5 h-3.5 mr-1.5" /> Add to calendar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
