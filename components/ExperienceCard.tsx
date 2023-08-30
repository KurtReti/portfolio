import React from "react";
import { motion } from "framer-motion";

type Props = {};

//TODO: replace dummy info with prop information for experience

export default function ExperienceCard({
  dot_point1,
  dot_point2,
  dot_point3,
  dot_point4,
  title,
  subtitle,
  img,
  year,
}) {
  return (
    <article className="h-[600px] mt-10 text-white md:hover:text-white  cursor-pointer border border-white transition-opacity duration-200 overflow-hidden snap-center p-10 bg-transparent flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[360px] md:w-[600px] xl:w-[800px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="h-24 w-24 rounded-full object-cover object-center mix-blend-lighten"
        src={img}
        alt=""
      ></motion.img>
      <div>
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="uppercase text-2xl font-light mt-1">{subtitle}</p>
        {/* <div className='flex space-x-2 my-2'>

    </div> */}
        <p className="uppercase py-4 text-white">{year}</p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          <li>{dot_point1}</li>
          <li>{dot_point2}</li>
          <li>{dot_point3}</li>
          <li>{dot_point4}</li>
        </ul>
      </div>
    </article>
  );
}
