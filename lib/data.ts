import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import moneytrackImg from "@/public/moneytrackImg.jpeg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Opencart developer",
    company: "Grandway knifes",
    description:
      "I maintained a simple sub-site of the GrandWay company called Elite Knifes. I needed to monitor the site, download products from excel spreadsheets and sometimes correct details on the site by adjusting the CSS file",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "NodeJS Developer",
    company: "ChatBullet",
    description:
      "My role was to make telegram, viber bots for companies that needed them. I've been coding mostly in JavaScript ES9+ and nodeJS. In projects, I took over all communication with the client, as well as development",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Lead React Native developer",
    company: "Arios",
    description:
      "I was the lead developer on the creation of the MoneyTrack pet app. At the beginning, the application was at Expo, but then it was transferred to React Native. I developed the entire frontend and backend, was responsible for the architecture and deployment",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "MoneyTrack",
    description:
      "This is my own mobile app for keeping daily records of purchases and just expenses.",
    tags: ["React Native", "Redux", "Firebase", "TypeScript"],
    imageUrl: moneytrackImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
