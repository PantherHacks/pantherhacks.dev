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

// export const TRACK_WINNERS: CategoryWinnerProps = {
//   categoryName: "Hacker's Choice",
//   teams: [
//     {
//       projectName: "JNKS",
//       devpostLink: "https://devpost.com/software/jnks",
//       members: ["Kayode Binitie", "Joshua Dowd", "Sean Esla", "Nate Smith"],
//     },
//     {
//       projectName: "Attack the World",
//       devpostLink: "https://devpost.com/software/attack-the-world",
//       members: ["Marcus Hall", "Jaylor Wilson", "Justin Pemberton"],
//     },
//     {
//       projectName: "Snip",
//       devpostLink: "https://devpost.com/software/snip-y6nkd4",
//       members: ["Galen Jauss", "Andy Nguyen", "Jordan Netz"],
//     },
//   ],
// };
