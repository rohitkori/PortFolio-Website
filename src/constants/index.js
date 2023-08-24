import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  django,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "https://drive.google.com/file/d/1Hw89MHfMbNpyMQdmppVzJfHBx4pJZ4O1/view?usp=sharing",
    title: "Resume",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    title: "Prometeo WebApp",
    role: "Backend Developer",
    github_link: "",
    icon: github,
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Django, React.js and other related technologies.",
    ],
  },
  {
    title: "SkillWell",
    role: "Full-Stack Developer",
    github_link: "https://github.com/rohitkori/skillwell",
    icon: github,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "A Freelancing Website For IIT Jodhpur Students created using React.js and Django.",
    ],
  },
  {
    title: "StyleLens",
    role: "Full-Stack Developer",
    github_link: "https://github.com/rohitkori/Appwrite-hackathon",
    icon: github,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "A website to find clothes featured in YouTube videos using image search.",
    ],
  },
  {
    title: "Automation of Contract",
    role: "Frontend Developer",
    github_link: "",
    icon: github,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: ["A website to automate the process of contract creation."],
  },
];

export { services, technologies, projects };
