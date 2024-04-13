"use client";

import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import MarqueeText from "../MarqueeText";
import { useRef } from "react";
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Projectsection({ imgurl, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const sampleText =
    " " + title + " " + title + " " + title + " " + title + " ";
  return (
    <div className=" flex h-[130vh] items-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: "-5vh", scale: 1 }}
        animate={{ opacity: 1, y: "-18vh", scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        className="w-screen absolute left-[0%] top-[50%]   -translate-x-1/2 -translate-y-1/2   "
      >
        <MarqueeText text={sampleText} />
      </motion.div>
      <div className="absolute left-[50%] top-[50%]  mb-5 flex px-16 -translate-x-1/2 -translate-y-1/2  gap-5">
        <motion.div
          initial={{ opacity: 1, scale: 1.808, y: "-1.5vh" }}
          animate={{ opacity: 1, scale: 1.2, y: "50vh" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.05) 0px -22px 70px 0px",
          }}
          className="relative aspect-[16/9] w-[300px] shrink-0 overflow-clip shadow-lg rounded-2xl md:aspect-video md:w-[60vw]"
        >
          <motion.img
            src={imgurl}
            alt={title}
            className="h-full w-full object-cover "
            style={{ scale }}
            initial={{ scale: 1.0 }}
            animate={{
              transition: { delay: 0.2, ...transition },
              // y: window.innerWidth > 1440 ? -1200 : -600,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Projectsection;
