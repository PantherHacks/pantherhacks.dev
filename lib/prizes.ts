/**
 * Array of prize objects for different hackathon tracks.
 * Each prize includes the track name, prize item description, associated image,
 * and a brand color accent for UI presentation.
 */
export const prizes: Array<{ trackName: string; prizeItem: string; imageSrc: string; accentColor: string }> = [
  {
    trackName: "HACKER'S CHOICE",
    prizeItem: "Ember Temperature Control Smart Mug",
    imageSrc: "hackers_choice_winner.png",
    accentColor: "#FE5501",
  },
  {
    trackName: "CYBERSECURITY",
    prizeItem: "Raspberry Pi 5 Starter Kit",
    imageSrc: "cybersecurity_winner.png",
    accentColor: "#00FF88",
  },
  {
    trackName: "ENTERTAINMENT",
    prizeItem: "Nothing Ear (a) Earbuds",
    imageSrc: "entertainment_winner.png",
    accentColor: "#5B41FF",
  },
  {
    trackName: "HEALTHCARE",
    prizeItem: "Levoit Smart Air Purifier",
    imageSrc: "healthcare_winner.png",
    accentColor: "#E820AB",
  },
  {
    trackName: "SUSTAINABILITY",
    prizeItem: "Kasa Smart Plugs & Kasa Smart Bulbs",
    imageSrc: "sustainability_winner.png",
    accentColor: "#8A38F5",
  },
];
