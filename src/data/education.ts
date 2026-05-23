export type Degree = {
  degree: string;
  institution: string;
  location: string;
  logo: string;
  period?: string;
};

export const education: Degree[] = [
  {
    degree: "M.Sc Business Analytics",
    institution: "Durham University",
    location: "UK",
    logo: "/assets/DU.png",
    period: "2023 — 2024",
  },
  {
    degree: "B.Tech Computer Science",
    institution: "Alliance University",
    location: "Bangalore, India",
    logo: "/assets/au_logo.png",
    period: "2016 — 2020",
  },
];
