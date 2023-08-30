import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DevIcon from "devicon-react-svg";
import Link from "next/link";

type Props = {};

export default function ProjectNew({
  title,
  description,
  project_link,
  github_link,
  image,
  skill1,
  skill2,
  skill3,
  flipStatus,
}) {
  const devIconStyle = {
    fill: "white",
    width: "24px",
  };

  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <motion.div
      className={
        flipStatus
          ? "h-[600px] w-screen flex flex-col-reverse gap-8 justify-center md:flex-row snap-center"
          : "h-[600px] w-screen flex flex-col-reverse gap-8 justify-center md:flex-row-reverse snap-center"
      }
    >
      <div className="flex py-4 flex-col h-2/5 w-full md:w-1/3 bg-transparent space-y-4">
        <h2 className="uppercase text-2xl text-white tracking-widest">
          {title}
        </h2>
        <p className=" text-sm ">{description}</p>

        <div className="flex flex-row justify-between ">
          <div className="flex gap-2 flex-row flex-wrap">
            <DevIcon icon={skill1} style={devIconStyle} viewBox="0 0 32 32" />
            <DevIcon icon={skill2} style={devIconStyle} viewBox="0 0 32 32" />
            <DevIcon icon={skill3} style={devIconStyle} viewBox="0 0 32 32" />
          </div>
          <div className="flex flex-col gap-2">
            <Link href={project_link}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className="bg-slate-900/50 hover:bg-slate-900/100 py-2 text-md hover:opacity-100 rounded-md px-2 text-white  self-end"
              >
                View Project
              </motion.button>
            </Link>
            <Link href={github_link}>
              <button className="self-end  text-sm text-zinc-500 hover:text-white hover:underline hover:underline-offset-4">
                View Github Repo
              </button>
            </Link>
          </div>
        </div>
      </div>

      <motion.img
        ref={ref}
        style={{
          translateX: scaleProgress,
          opacity: scrollYProgress,
        }}
        viewport={{
          once: true,
        }}
        className="object-cover h-3/5 w-full md:w-1/2 "
        src={image}
      ></motion.img>
    </motion.div>
  );
}
