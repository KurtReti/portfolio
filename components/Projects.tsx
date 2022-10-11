import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import Skill from "./Skill";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col overflow-scroll  relative text-left md:flex-row max-w-full px-10 justify-evenly    items-center">
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
        className="absolute top-24 uppercase tracking-[20px]"
      >
        Projects
      </motion.h3>

      <div className="flex w-full h-2/3 items-center justify-center flex-row flex-wrap space-y-4  gap-24">



          <Project image="https://cdn.discordapp.com/attachments/216749490747473921/1028568796375556176/Screen_Shot_2022-10-09_at_6.24.35_pm.png" title="OLPC Dashboard" description="A data visualisation dashboard developed by my team for a non-profit organisation called OLPC. I worked on the frontend design using Figma,  which was then implemented using HTML and CSS before being converted into python elements to be used with Plot.ly. The project was developed for the capstone project tradeshow and was awarded second place runner up overall. The project is no longer live due to the privacy of the information however the github repo can still be viewed." github_link="https://github.com/KurtReti/OLPC-Dashboard" project_link="" skill1="html5" skill2="bootstrap" skill3="python"/>


          <Project image="https://cdn.discordapp.com/attachments/216749490747473921/1028545686045741127/hind.png"title="filmmaker portfolio" description="A portfolio website I designed for a filmmaker friend of mine to showcase his work. The site utilises React, implementing Next.js for server-side rendering. It is styled with tailwindcss and is fully responsive in its design to ensure that his work can be viewed by anyone at any time. The site utilises a number of react libraries such as framer motion, which are implemented seamlessly in the final design." github_link="https://github.com/KurtReti/hind-portfolio" project_link="" skill1="react" skill2="css3" skill3="javascript"/>





   
      </div>
    </div>
  );
}
