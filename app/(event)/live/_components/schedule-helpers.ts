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
