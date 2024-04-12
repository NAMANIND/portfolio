"use client";

import React from "react";
import { movies } from "../../movies";
import Sectionpro from "@/components/section/Sectionpro";
import { motion } from "framer-motion";

function Page() {
  const moviesok = movies.sort((a, b) => a.id - b.id);
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      // animate={{ y: hidden ? "-100%" : 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
      className="h-screen w-screen text-black font-normal text-xl px-4 mx-auto max-w-full sm:px-6 lg:px-8"
    >
      <div className="sm:px-10 w-100 flex gap-52 flex-col ">
        <div className="flex flex-wrap  gap-[4%] ">
          {moviesok.map((movie, index) => (
            <Sectionpro
              poster={movie.poster}
              key={index}
              title={movie.title}
              type={movie.type}
              tags={movie.tags}
              name={movie.name}
            />
          ))}
        </div>

        <div className=" flex flex-row justify-between flex-grow text-gray-600 text-xl mt-20 ">
          <div></div>
          <div className="w-1/2">
            <p className="text-2xl">
              Looking to work with me on your next project? I’d love to hear
              from you.
              <span className="text-black font-medium">
                <br />
                hello@namanrai.tech
                <br />
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between  text-black  text-2xl font-medium items-end mb-10">
          <div>
            Naman rai
            <br />
            Full Stack Developer
          </div>

          <div className="text-gray-600">©2024</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
