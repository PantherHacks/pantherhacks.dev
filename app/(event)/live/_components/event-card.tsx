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
import { Separator } from "@/components/ui/separator";
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
  const isLive = startTimestamp.getTime() <= Date.now() && endTimestamp.getTime() >= Date.now();

  return (
    <div className={cn("flex flex-col p-[2px] w-72 sm:w-[35rem] md:w-[45rem]", isLive && "highlighted-card")}>
      <div className={cn("p-8 rounded-3xl border border-white/10", colors[2], colors[3])}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2 md:mb-0">
          <h3 className="text-3xl flex-shrink font-UbuntuMono">{name}</h3>
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
        <Separator className="mb-2 bg-white/15" />
        <p className="text-white/80 font-UbuntuMono">{description}</p>
        <Separator className="my-2 bg-white/15" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-y-2 sm:gap-y-0">
          <div className="align-bottom text-white/70">
            <div className="flex flex-row items-center">
              <MapPin className="mr-2 mb-2 w-5 h-5" />
              <p>{location}</p>
            </div>
            <div className="flex flex-row items-center">
              <Clock className="mr-2 w-5 h-5" />
              <p>
                {startTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })} -{" "}
                {endTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}
              </p>
            </div>
          </div>
          <Separator className="block sm:hidden bg-white/15" />
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
              className="px-3 py-5 bg-transparent text-primary border border-primary transition-all duration-300 rounded-none hover:rounded-xl hover:bg-transparent cursor-pointer items-center"
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
