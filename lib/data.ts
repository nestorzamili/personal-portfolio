import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import stateMachine from "@/public/stateMachine.jpg";
import whatsappAPI from "@/public/whatsapp-api.png";
import mcp from "@/public/mcp.jpg";

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
    title: "Field Engineer",
    location: "PT. Satunol Mikro Sistem",
    description:
      "Commissioned PLC, Multiplexer, and Teleprotection Systems for Siemens-PLN Project, and Baseband, MLTN, ML6K Systems for Ericsson-Telkomsel Project",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2022",
  },
  {
    title: "Trainee",
    location: "Adinusa Bootcamp",
    description:
      "I have earned the LFCA (Linux Foundation Certified IT Associate) certification, along with several other certifications related to cloud computing, demonstrating my knowledge and skills in this area.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Core Banking Operation",
    location: "BRI Ceria",
    description:
      "I processed End of Day operations for BRI Ceria, managed and monitored Nifi Flow and Grafana resources, and oversaw Finacle services. Additionally, I developed RPA solutions using UiPath to streamline reporting for Ceria.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RPA End of Day",
    description:
      "This project aims to automate the submission process for End of Day (EOD) menus in a banking system (Finacle Core Banking) using UiPath.",
    tags: ["UiPath", "Core Banking", "Postgresql", "API"],
    imageUrl: stateMachine,
    url: "https://github.com/nestorzamili/Thesis-Project",
  },
  {
    title: "WhatsApp API",
    description:
      "WhatsApp Bot built with Express.js, integrated via WhatsApp Web to send messages through API.",
    tags: ["BOT", "WhatsApp", "Express.js", "API", "Node.js"],
    imageUrl: whatsappAPI,
    url: "https://github.com/nestorzamili/WhatsApp-Web-JS",
  },
  {
    title: "MCP Monitoring",
    description:
      "Web Application for Monitoring and Updating the status of documents.",
    tags: ["Next.js", "PostgreSQL", "Clerck", "Vercel"],
    imageUrl: mcp,
    url: "https://monitoring-mcp.vercel.app/",
  },
] as const;

export const skillsData = [
  "UiPath",
  "RPA",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SQL",
  "Python",
  "Linux",
  "Express",
  "PostgreSQL",
] as const;
