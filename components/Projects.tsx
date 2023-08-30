import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import Skill from "./Skill";
import Project from "./Project";
import ProjectNew from "./ProjectNew";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-fit flex pt-24 bg-mountain flex-row relative text-left md:flex-row max-w-full justify-evenly    items-center">
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
        className="absolute top-0 text-white uppercase tracking-[20px]"
      >
        Projects
      </motion.h3>

      <div className="flex w-full pt-20 h-2/3 items-center justify-center flex-row flex-wrap space-y-12  gap-24 scrollbar scrollbar-none">
        <ProjectNew
          image="https://cdn.discordapp.com/attachments/249813362806882304/1140824543146016768/Screen_Shot_2023-08-15_at_11.48.22_am.png"
          title="wizard battle"
          description="A simple 2D fighting game I developed to learn the basics of HTML canvas and practice some further object oriented programming skills. This project is all built in vanilla javascript with minimal HTML and CSS being used. I had a lot of fun building this one and definitely learnt a lot about the fundamentals of javascript and how to use it to manipulate the DOM."
          github_link="https://github.com/KurtReti/Wizard-Battle"
          project_link="https://kurtreti.github.io/Wizard-Battle/"
          skill1="javascript"
          skill2="html5"
          skill3="css3"
          flipStatus={true}
        />

        <Project
          image="https://cdn.discordapp.com/attachments/216749490747473921/1028568796375556176/Screen_Shot_2022-10-09_at_6.24.35_pm.png"
          title="OLPC Dashboard"
          description="A data visualisation dashboard developed by my team for a non-profit organisation called OLPC. I worked on the frontend design using Figma,  which was then implemented using HTML and CSS before being converted into python elements to be used with Plot.ly. The project was developed for the capstone project tradeshow and was awarded second place runner up overall. The project is no longer live due to the privacy of the information however the github repo can still be viewed."
          github_link="https://github.com/KurtReti/OLPC-Dashboard"
          project_link=""
          skill1="html5"
          skill2="bootstrap"
          skill3="python"
          flipStatus={false}

        />

        <ProjectNew
          image="https://cdn.discordapp.com/attachments/216749490747473921/1028545686045741127/hind.png"
          title="filmmaker portfolio"
          description="A portfolio website I designed for a filmmaker friend of mine to showcase his work. The site utilises React, implementing Next.js for server-side rendering. It is styled with tailwindcss and is fully responsive in its design to ensure that his work can be viewed by anyone at any time. The site utilises a number of react libraries such as framer motion, which are implemented seamlessly in the final design."
          github_link="https://github.com/KurtReti/hind-portfolio"
          project_link="https://www.issakhfilms.com/"
          skill1="react"
          skill2="css3"
          skill3="javascript"
          flipStatus={true}

        />

        <Project
          image="https://cdn.discordapp.com/attachments/249813362806882304/1143484245612953682/Screen_Shot_2023-08-22_at_7.57.40_pm.png"
          title="Second brain"
          description="A todo list created for the Odin Project. The project was built with native javascript and utilises local storage to save the users data. The project was a great way to practice my javascript skills and learn more about how to manipulate the DOM. The project is fully responsive and can be viewed on any device."
          github_link="https://github.com/KurtReti/Todo-List"
          project_link="https://github.com/KurtReti/Todo-List#:~:text=kurtreti.github.io/Todo%2DList/"
          skill1="javascript"
          skill2="css3"
          skill3="html5"
          flipStatus={false}

        />

        <ProjectNew
          image="https://media.discordapp.net/attachments/249813362806882304/1143501180216016896/Screen_Shot_2023-08-22_at_9.05.12_pm.png?width=1992&height=1228"
          title="Kurts Kitchen "
          description="An online recipe book I developed to practice my React skills. The recipes are pulled from the mealDB API and are displayed in a responsive list. "
          github_link="https://github.com/KurtReti/kurts-kitchen"
          project_link="https://kurtreti.github.io/kurts-kitchen/"
          skill1="react"
          skill2="javascript"
          skill3="html5"
          flipStatus={true}
        />
        
      </div>
    </div>
  );
}
