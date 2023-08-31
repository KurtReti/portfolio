import React, { useCallback, useEffect, useRef, useState } from "react";
import Background from "./Background";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.8], ["50%", "-100%"]);
 const opacityProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
 const newScaleProgress = useTransform(scrollYProgress, [1, 2], ["0%", "100%"])

  return (
    <div
      className="relative bg-mountain h-screen flex flex-col items-center justify-center text-center
    overflow-hidden z-0"
    >
{/*    
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 2.3,
          duration: 1.5,
        }}
        style={{
          translateY: newScaleProgress}}
        className="absolute z-10 bg-rose-900 mix-blend-exclusion h-2/3 w-2/3 hidden md:block"
      ></motion.div> */}
      <motion.img
        initial={{
          y: 200,
          opacity: 0.1,
        }}
        whileInView={{
          y: -150,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        style={{
          translateY: scaleProgress
        }}

        className="absolute z-20 bottom-0 md:object-cover md:top-40 object-center mix-blend-lighten"
        src="https://cdn.discordapp.com/attachments/866223582422368296/1146647724998008862/mountainV2.png"
        alt=""
        ref={ref}
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 1.5,
        }}
      >
        <p className=" text-4xl z-30 -top-10 md:text-5xl self-center relative text-white ">
          Kurt Reti <br></br> &lt;Frontend Developer /&gt;{" "}
        </p>
        <div className="relative z-30 z -top-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
