// defines date information for the hackathon

/**
 * An object containing information about the hackathon dates.
 *
 * @property {string} month - The month of the hackathon.
 * @property {number} startDay - The starting day of the hackathon.
 * @property {number} endDay - The ending day of the hackathon.
 * @property {number} year - The year of the hackathon.
 * @property {string} dateString - A formatted string representing the hackathon dates.
 */
export const hackathonDateInfo = {
  month: "April",
  startDay: 25,
  endDay: 27,
  year: 2025,
  get dateString() {
    return this.month + " " + this.startDay + "-" + this.endDay + ", " + this.year;
  },
};

/**
 * An object containing information about the application closing date and time.
 *
 * @property {string} closeMonth - The month when the application closes.
 * @property {number} closeDay - The day of the month when the application closes.
 * @property {number} closeYear - The year when the application closes.
 * @property {number} closeHour - The hour of the day (in 24-hour format) when the application closes.
 * @property {number} closeMinute - The minute of the hour when the application closes.
 * @property {string} timeZone - The time zone of the closing time.
 * @property {string} dateString - A formatted string representing the closing date and time.
 */
export const applicationDateInfo = {
  closeMonth: "April",
  closeDay: 10,
  closeYear: 2025,
  closeHour: 11,
  closeMinute: 59,
  pmOrAm: "PM",
  timeZone: "PST",
  get dateString() {
    return `${this.closeMonth} ${this.closeDay}, ${this.closeYear} at ${this.closeHour}:${this.closeMinute} ${this.pmOrAm} ${this.timeZone}`;
  },
};
