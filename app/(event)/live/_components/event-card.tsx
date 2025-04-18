import { Clock, Laptop, MapPin, MessageCircleQuestion, Speech, Star, Users, Utensils } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CalendarEvent, getCalendarEventColors } from "./schedule-helpers";

const EventCard: React.FC<CalendarEvent> = ({
  name,
  activityType,
  location,
  description,
  startTimestamp,
  endTimestamp,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-10 rounded-3xl w-72 sm:w-[35rem] md:w-[45rem]",
        getCalendarEventColors(activityType)[2],
        getCalendarEventColors(activityType)[3]
      )}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2 md:mb-0">
        <h3 className={cn("text-3xl flex-shrink", getCalendarEventColors(activityType)[2])}>{name}</h3>
        <Badge className={cn("h-6 flex-shrink-0 whitespace-nowrap", getCalendarEventColors(activityType)[0])}>
          {activityType === "Check-in" && <Clock className="w-3 h-3 mr-2" />}
          {activityType === "Main Event" && <Star className="w-3 h-3 mr-2" />}
          {activityType === "Hacking Time" && <Laptop className="w-3 h-3 mr-2" />}
          {activityType === "Office Hours" && <MessageCircleQuestion className="w-3 h-3 mr-2" />}
          {activityType === "Food" && <Utensils className="w-3 h-3 mr-2" />}
          {activityType === "Social Event" && <Users className="w-3 h-3 mr-2" />}
          {activityType === "Guest Speaker" && <Speech className="w-3 h-3 mr-2" />} {activityType}
        </Badge>
      </div>
      <Separator className="mb-2 bg-black" />
      <p>{description}</p>
      <Separator className="my-2 bg-black" />
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
  );
};

export default EventCard;
