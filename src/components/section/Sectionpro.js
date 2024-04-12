"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

function Sectionpro({ title, poster, key, name, type, tags }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const imageClasses = clsx(
    "absolute hidden sm:block top-0 -right-0 w-[100%] h-full object-cover rounded-t-lg shadow-2xl transition   duration-500 ease-in-out transform",
    {
      "group-hover:scale-[1.07] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-0": true,
      "group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-0": true,
      "group-even:right-[initial] group-even:-left-0": true,
    }
  );
  // console.log(title);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      transition={{ type: "ease", duration: "0.5" }}
      className="group mb-3 sm:mb-8 last:mb-0 w-[48%] rounded-lg"
    >
      <Link href={`./projects/${encodeURIComponent(name)}`} passHref>
        <motion.section
          // Use layoutId here
          layoutId={`project-${name}`}
          className=" max-w-[80rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[80vh] hover:bg-gray-200 transition sm:group-even:pl-0 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
          <div
            className="pt-4 pb-7 absolute z-50 px-5  sm:pt-10 w-[40%] flex flex-col h-full sm:group-even:left-[60%]
          backdrop-blur bg-black/40
          
          
          "
          >
            <h3 className="text-xl font-semibold text-white sm:group-even:text-right">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-lg sm:group-even:text-right">
              {type}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:group-even:justify-end sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-white/30 px-3 py-1 text-xs leading-loose uppercase tracking-wider text-white rounded-full "
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={poster}
            alt="Project I worked on"
            quality={95}
            className={imageClasses}
          />
        </motion.section>
      </Link>
    </motion.div>
  );
}

export default Sectionpro;
