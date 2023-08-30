import React from "react";
import { motion } from "framer-motion";
import DevIcon from "devicon-react-svg";

type Props = {};

export default function Skill({ skill, proficiency, color }) {
  const devIconStyle = {
    fill: `${color}`,
    width: "64px",
  };
  const prof = proficiency;
  return (
    <div className="">
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 1.2,
        }}
        className={` flex grayscale brightness-200 hover:brightness-100 hover:grayscale-0 transition-colors flex-col items-center justify-center opacity-60 group hover:opacity-100  text-white duration-500  h-24 rounded-full   w-${24}`}
      >
        <DevIcon icon={skill} style={devIconStyle} viewBox="0 0 32 32" />
        <p className="text-sm mt-2 uppercase opacity-0 group-hover:opacity-100 font-light">
          {skill}
        </p>
      </motion.div>
    </div>
  );
}
