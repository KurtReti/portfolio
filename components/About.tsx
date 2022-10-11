import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
            once: true
        }}
        className="absolute pl-4 md:pl-0 top-24 uppercase tracking-[20px]"
      >
        About
      </motion.h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src="https://cdn.discordapp.com/attachments/870451033044815897/979575175366475806/F5F2D580-2EBB-4115-B28C-A6659AC7B8B7_1_105_c.jpeg"
        alt=""
        className=" -mb-40 md:mb-0 h-36 w-36 md:h-64 md:w-64 rounded-full bg-cover"
      />
      <motion.div
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
            once: true
        }}

        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="uppercase text-white tracking-widest">
          A bit about <span className="font-bold text-red-400 opacity-60">me</span>
        </h4>
        <p className="text-sm text-justify">
          Hi, I&#39;m Kurt. I love to make things. Websites, apps, food, conversation. I enjoy the creative process from start to finish. As much as I like making food, I like building websites more. I live in Wollongong, just south of Sydney, and I&#39;ve just finished my bachelors in computer science at the University of Wollongong. I&#39;ve been working on my front end skills ever since, learning about the industry preferred tools that they dont teach you about at Uni, libraries like React and Next.js. I&#39;ve been practicing these new skills by building sites for my friends and myself, from the design stage to the implementation, debugging and final deployment. You can check out some of my work below and find out a bit more about me. If you want to get in touch drop me a message in the contact section at the bottom, I would love to hear from you.
        </p>
      </motion.div>
    </div>
  );
}
