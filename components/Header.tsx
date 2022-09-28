import React from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion"

type Props = {};

export default function Header({}: Props) {
  return(
   <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 3
    }}
    className="flex flex-row">
        <SocialIcon url="https://github.com/KurtReti" fgColor="#9ca3af" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/kurt-reti-aa469924a/" fgColor="#9ca3af" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/KurtReti" fgColor="#9ca3af" bgColor="transparent" />
    </motion.div>

    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 3
    }} className="flex flex-row items-center cursor-pointer">
        <SocialIcon network="email" bgColor="transparent" fgColor="#9ca3af" />
        <p className="hidden uppercase text-gray-400 md:inline-flex">Get in touch</p>
    </motion.div>

  </header>);
}
