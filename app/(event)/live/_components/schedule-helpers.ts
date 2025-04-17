export interface CalendarEvent {
  name: string;
  activityType: string;
  location: string;
  description: string;
  startTimestamp: Date;
  endTimestamp: Date;
}

export function getBadgeColor(activityType: string): string {
  switch (activityType) {
    case "Check-in":
      return "#D4EDBD";

    case "Hacking Time":
      return "#B10202";

    case "Guest Speaker":
      return "#215A6C";

    case "Office Hours":
      return "#5B3286";

    case "Main Event":
      return "#0953A8";

    case "Food":
      return "#FFE59F";

    case "Social Event":
      return "#E6CFF1";

    default:
      return "blue";
  }
}
