export type CategoryWinnerProps = {
  categoryName: string;
  icon?: string;
  teams: TeamProps[];
};

export type TeamProps = {
  projectName: string;
  devpostLink: string;
  members: string[];
};

export const HACKERS_CHOICE_WINNERS: CategoryWinnerProps = {
  categoryName: "Hacker's Choice",
  teams: [
    {
      projectName: "JNKS",
      devpostLink: "https://devpost.com/software/jnks",
      members: ["Kayode Binitie", "Joshua Dowd", "Sean Esla", "Nate Smith"],
    },
    {
      projectName: "Attack the World",
      devpostLink: "https://devpost.com/software/attack-the-world",
      members: ["Marcus Hall", "Jaylor Wilson", "Justin Pemberton"],
    },
    {
      projectName: "Snip",
      devpostLink: "https://devpost.com/software/snip-y6nkd4",
      members: ["Galen Jauss", "Andy Nguyen", "Jordan Netz"],
    },
  ],
};

export const TRACK_WINNERS: CategoryWinnerProps[] = [
  {
    categoryName: "Entertainment",
    teams: [
      {
        projectName: "Unity.wav",
        devpostLink: "https://devpost.com/software/unity-wav",
        members: ["Tri Vu", "Daniel Oh"],
      },
      {
        projectName: "Artemis Lost",
        devpostLink: "https://devpost.com/software/artemis-lost",
        members: ["Jacqueline Henriksen"],
      },
    ],
  },
  {
    categoryName: "Cybersecurity",
    teams: [
      {
        projectName: "Attack the World",
        devpostLink: "https://devpost.com/software/attack-the-world",
        members: ["Marcus Hall", "Jaylor Wilson", "Justin Pemberton"],
      },
      {
        projectName: "Nyx Autonomous White Hat Hacker",
        devpostLink: "https://devpost.com/software/nyx-autonomous-securities-scanner",
        members: ["Payton Johncour", "Eric Nguyen", "Kevin Doan"],
      },
    ],
  },
  {
    categoryName: "Healthcare",
    teams: [
      {
        projectName: "JNKS",
        devpostLink: "https://devpost.com/software/jnks",
        members: ["Kayode Binitie", "Joshua Dowd", "Sean Esla", "Nate Smith"],
      },
      {
        projectName: "Navis",
        devpostLink: "https://devpost.com/software/navis-t8nsza",
        members: ["Neelesh Roy"],
      },
    ],
  },
  {
    categoryName: "Sustainability",
    teams: [
      {
        projectName: "CarbonPlay",
        devpostLink: "https://devpost.com/software/carbonplay",
        members: ["Arya Kumar"],
      },
      {
        projectName: "SkySweep",
        devpostLink: "https://devpost.com/software/skysweep",
        members: ["Jasmine Marwaha", "Stephanie Noe"],
      },
    ],
  },
];
