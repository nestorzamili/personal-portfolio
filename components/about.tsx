"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I hold a Bachelor's degree in Information Systems from Binus University.
        Passionate about technology and problem-solving, I thrive on creating
        innovative solutions that benefit others. In my current role, I've
        implemented <span className="font-medium">RPA UI Automation</span> using{" "}
        <span className="font-medium">UiPath</span> and{" "}
        <span className="font-medium">Node.js reporting systems</span> to
        streamline tasks and enhance team efficiency. I am proficient in{" "}
        <span className="font-medium">Linux</span>,{" "}
        <span className="font-medium">SQL</span>, and{" "}
        <span className="font-medium">Python</span> for automation, and my core
        tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Additionally, I have experience with TypeScript and Prisma.
      </p>

      <p>
        I am always eager to learn new technologies and am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as an RPA
        developer, where I can continue to apply and expand my skills in
        automation and software development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and traveling.
      </p>
    </motion.section>
  );
}
