import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-fit md:h-screen flex bg-gradient-to-b from-mountain to-slate-900 flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
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
        className="absolute pl-4 text-white md:pl-0 top-24 uppercase tracking-[20px] hidden md:block"
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
        src="https://cdn.discordapp.com/attachments/249813362806882304/1143504428884840448/1683108274948.jpeg"
        alt=""
        className=" mb-10 md:mb-0 h-36 w-36 md:h-64 md:w-64 rounded-full bg-cover "
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
          once: true,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="uppercase text-white tracking-widest">
          A bit about{" "}
          <span className="font-bold text-white opacity-60">me</span>
        </h4>
        <p className="text-sm text-justify">
          Hey there! I'm <span className="opacity-100 text-white">Kurt</span>, and I'm all about bringing creativity to
          life through front-end development. My journey began with a passion
          for coding and design, which naturally led me to the world of crafting
          user interfaces. My experience stems from my university days, where I
          dipped my toes into full-stack development. Now, I'm geared up to dive
          headfirst into the exciting world of professional front-end work. I've
          had the pleasure of working with a bunch of front-end languages and
          frameworks like React, Next.js, and even plain ol' JavaScript. What
          really gets me excited is discovering new ways to make interfaces pop,
          whether through hidden gems in documentation or the latest libraries.
          Lately, I've been fascinated by generative AI technology, like the
          eye-catching mountain image gracing the top of this page. It's this
          kind of innovation that keeps my gears turning. Collaboration is my
          jam. From wearing the designer hat to stepping into the role of a team
          lead, I've done it all during my university team projects. Whether
          it's docs, front-end, back-end, or the full stack, I'm in. When I'm
          not coding, you'll find me glued to the digital realm, soaking in
          seamless online experiences. Those aha moments inspire me to level up
          my skills, all for the sake of crafting memorable digital adventures.
          Join me on this genuine journey where I blend code and design to craft
          front-end experiences that make a statement. Let's create something
          awesome together!
        </p>
      </motion.div>
    </div>
  );
}
