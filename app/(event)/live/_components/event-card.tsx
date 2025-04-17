import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarEvent, getBadgeColor } from "./schedule-helpers";

const EventCard: React.FC<CalendarEvent> = ({
  name,
  activityType,
  location,
  description,
  startTimestamp,
  endTimestamp,
}) => {
  return (
    <div className="flex flex-col bg-gray-900 p-10 rounded-3xl">
      <div className="flex flex-row items-center gap-2">
        <h3 className="text-3xl">{name}</h3>{" "}
        <Badge className={`h-6 bg-[${getBadgeColor(activityType)}]`}>{activityType}</Badge>
      </div>
      <Separator className="mb-2" />
      <p>Location: {location}</p>
      <p>Description: {description}</p>
      <p>
        Start Timestamp: {startTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}
      </p>
      <p>End Timestamp: {endTimestamp.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}</p>
    </div>
  );
};

export default EventCard;
