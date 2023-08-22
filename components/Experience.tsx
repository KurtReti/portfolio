import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex bg-zinc-900 flex-col overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="absolute pl-4 md:pl-0 top-24 uppercase tracking-[20px]"
      >
        Experience
      </motion.h3>
      <div className="mt-20">
        <ExperienceCard
          title="University of Wollongong"
          subtitle="bachelor of computer science"
          year="2019-2022"
          dot_point1="Major in Software Engineering"
          dot_point2="Major in Cybersecurity"
          dot_point3="UX/UI Design, HCI Principles, Networking, Problem Solving"
          dot_point4="Project Management, Agile Methodologies, Scrum"
          img="https://cdn.discordapp.com/attachments/216749490747473921/1024626312117239829/Screen_Shot_2022-09-28_at_8.18.48_pm.png"
        />
      </div>
    </div>
  );
}
