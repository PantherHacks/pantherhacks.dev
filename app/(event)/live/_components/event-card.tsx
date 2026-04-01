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

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <h3 className="text-2xl flex-shrink text-white" style={{ textShadow: `0 0 12px ${accent}55` }}>
            {name}
          </h3>
          <Badge className={cn("h-6 flex-shrink-0 cursor-default whitespace-nowrap", colors[0])}>
            {activityType === "Check-in" && <Clock className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Main Event" && <Star className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Hacking Time" && <Laptop className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Office Hours" && <MessageCircleQuestion className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Food" && <Utensils className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Social Event" && <Users className="w-3 h-3 mr-2" aria-hidden="true" />}
            {activityType === "Guest Speaker" && <Speech className="w-3 h-3 mr-2" aria-hidden="true" />} {activityType}
          </Badge>
        </div>

        {/* Accent separator */}
        <div className="mb-3 h-px" style={{ background: `linear-gradient(to right, ${accent}99, transparent)` }} />

        <p className="text-white/70 text-sm leading-relaxed">{description}</p>

        <div className="mt-3 mb-3 h-px" style={{ background: `linear-gradient(to right, ${accent}44, transparent)` }} />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-y-3 sm:gap-y-0">
          <div className="text-white/55 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: accent }} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: accent }} />
              <span>
                {startTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })} &ndash;{" "}
                {endTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}
              </span>
            </div>
          </div>
          {isLive ? (
            <h2 className="font-TangoSansBold text-3xl text-[#fd021d] flex flex-row justify-center items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="relative flex justify-center items-center">
                  <div className="absolute inline-flex w-4 h-4 bg-[#fd021d] rounded-full animate-ping duration-1000"></div>
                  <div className="relative inline-flex w-5 h-5 bg-[#fd021d] rounded-full"></div>
                </div>
                <span className="neon-text-small font-Xirod transform-gpu">LIVE</span>
              </div>
            </h2>
          ) : (
            <Button
              className="px-3 py-5 bg-transparent text-primary border border-primary transition-all duration-200 rounded-none hover:rounded-xl hover:bg-primary/10 cursor-pointer items-center font-UbuntuMono tracking-wider"
              onClick={() => addToCalendar(name, activityType, description, location, startTimestamp, endTimestamp)}
            >
              <CalendarPlus2 className="w-4 h-4 mr-1" /> Add to calendar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
