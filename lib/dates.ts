// defines date information for the hackathon

export const hackathonDateInfo = {
  month: "April",
  startDay: 25,
  endDay: 27,
  year: 2025,
  get dateString() {
    return this.month + " " + this.startDay + "-" + this.endDay + ", " + this.year;
  },
};
