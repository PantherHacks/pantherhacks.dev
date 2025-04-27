// defines strings to describe
import { hackathonDateInfo } from "@/lib/dates";

/**
 * An object containing descriptions for the hackathon countdown timer
 *
 * @property toApplicationDue - Description for the countdown until the applications are due
 * @property toStart - Description for the countdown until the hackathon starts
 * @property toEnd - Description for the countdown until the hackathon ends
 * @property hasEnded - Description (without a timer) for when the hackathon has ended
 */
export const countdownDescriptions = {
  toApplicationDue: "until applications due",
  toStart: "until hacking begins",
  toEnd: "until submissions due",
  hasEnded: `PantherHacks ${hackathonDateInfo.year} has concluded.`,
};
