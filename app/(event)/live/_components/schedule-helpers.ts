export interface CalendarEvent {
  name: string;
  activityType: string;
  location: string;
  description: string;
  startTimestamp: Date;
  endTimestamp: Date;
}

/**
 * Retrieves an array of color classes or hex codes based on the provided activity type.
 *
 * The returned array contains values for styling calendar events, specified as:
 *   - [0]: "Badge Background"
 *   - [1]: "Badge Text Color"
 *   - [2]: "Card Background"
 *   - [3]: "Card Text Color"
 *
 * @param activityType - The type of activity for which to retrieve colors.
 *   Supported activity types include:
 *   - "Check-in"
 *   - "Hacking Time"
 *   - "Guest Speaker"
 *   - "Office Hours"
 *   - "Main Event"
 *   - "Food"
 *   - "Social Event"
 *   If the activity type is not recognized, a default color set is returned.
 *
 * @returns An array of strings representing color values. The array includes:
 *   - [0]: Badge Background (e.g., "bg-[#D4EDBD]" or hex code like "#B10202")
 *   - [1]: Badge Text Color (e.g., "text-black" or "text-white")
 *   - [2]: Card Background (e.g., hex code like "#FFE59F")
 *   - [3]: Card Text Color (e.g., "text-white")
 *   If no specific value is defined for an index, it may be an empty string.
 */
export function getCalendarEventColors(activityType: string): string[] {
  switch (activityType) {
    case "Check-in":
      return ["bg-[#1A8E00] hover:bg-[#1A8E00]", "text-white", "bg-[#D6F1D0]", "text-black"];

    case "Hacking Time":
      return ["bg-[#D51812] hover:bg-[#D51812]", "text-white", "bg-[#FFECEC]", "text-black"];

    case "Guest Speaker":
      return ["bg-[#03727F] hover:bg-[#03727F]", "text-white", "bg-[#B3EBFF]", "text-black"];

    case "Office Hours":
      return ["bg-[#6D008E] hover:bg-[#6D008E]", "text-white", "bg-[#F5DCFF]", "text-black"];

    case "Main Event":
      return ["bg-[#00288E] hover:bg-[#00288E]", "text-white", "bg-[#A8D2FF]", "text-black"];

    case "Food":
      return ["bg-[#F28910] hover:bg-[#F28910]", "text-white", "bg-[#FFF4E7]", "text-black"];

    case "Social Event":
      return ["bg-[#C4019A] hover:bg-[#C4019A]", "text-white", "bg-[#FFE2ED]", "text-black"];

    default:
      return ["blue", "blue", "blue", "blue"];
  }
}

/**
 * Generates an ICS (iCalendar) file for an event and triggers a download for the user.
 *
 * @param title - The title of the event.
 * @param activityType - The type of activity (e.g., meeting, workshop).
 * @param description - A description of the event.
 * @param location - The location where the event will take place.
 * @param startTimestamp - The start time of the event as a Date object.
 * @param endTimestamp - The end time of the event as a Date object.
 *
 * @remarks
 * This function creates a downloadable `.ics` file containing the event details.
 * The file is automatically named based on the event title, with spaces replaced by underscores.
 * The function uses the `Blob` API to generate the file and a temporary anchor element to trigger the download.
 *
 * @example
 * ```typescript
 * addToCalendar(
 *   "Team Meeting",
 *   "Meeting",
 *   "Discuss project updates and next steps.",
 *   "Conference Room A",
 *   new Date("2023-10-01T10:00:00Z"),
 *   new Date("2023-10-01T11:00:00Z")
 * );
 * ```
 */
export function addToCalendar(
  title: string,
  activityType: string,
  description: string,
  location: string,
  startTimestamp: Date,
  endTimestamp: Date
): void {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:[${activityType}] ${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startTimestamp.toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTEND:${endTimestamp.toISOString().replace(/[-:]/g, "").split(".")[0]}Z
END:VEVENT
END:VCALENDAR
  `.trim();

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });

  const a = document.createElement("a");
  a.download = `${title.replace(/\s+/g, "_")}.ics`;
  a.href = URL.createObjectURL(blob);
  a.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  });
  a.click();
}
