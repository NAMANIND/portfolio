"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [location, setLocation] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else if (previous - latest > 20) {
      setHidden(false);
    }
  });

  // on window load

  useEffect(() => {
    // check if window is defined
    if (typeof window !== "undefined") {
      const locationc = window.location.pathname;
      // console.log(locationc);

      setLocation(locationc);
    }
  }, []);

  if (location == "/resume") {
    return <> </>;
  }

  return (
    <motion.nav
      className=" py-4 relative w-full top-0 z-[1000] bg-white   right-0 bottom-0 left-0  0 0 0 0 h-fit "
      initial={{ y: "-100%" }}
      // animate={{ y: hidden ? "-100%" : 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 mx-auto max-w-full sm:px-6 lg:px-8">
        <div
          className="my-5 border-1 
        border-zinc-400
        backdrop-blur bg-white
         
          rounded-full  sm:px-10 w-100  px-7"
        >
          <div className="flex items-end justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <a href="/" className="text-black  text-2xl font-medium">
                Naman rai
                <br />
                Full Stack Developer
              </a>
            </div>
            <div className="hidden md:flex nav-p">
              <ul className={`flex space-x-8  text-gray-600 font-normal  `}>
                <li className="relative group">
                  <a href="/work" className=" hover:text-black   text-2xl">
                    <span className="tracking-[-1em] mr-5 group-hover:tracking-normal group-hover:mr-3  transition-all duration-300 ease-in-out">
                      {"//"}
                    </span>
                    {location == "/work" ? "Viewing Work" : "View Work"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
