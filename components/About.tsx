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
        className="absolute top-24 uppercase tracking-[20px]"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptates culpa a quidem omnis libero eius? Eius ut, nesciunt aliquid
          similique nemo veritatis veniam repellendus maxime ipsa perspiciatis
          blanditiis alias perferendis fugiat voluptatum iusto aut dicta atque
          consequuntur facere accusantium velit? Velit cupiditate, aliquam vero
          sequi beatae asperiores architecto sunt!
        </p>
      </motion.div>
    </div>
  );
}
