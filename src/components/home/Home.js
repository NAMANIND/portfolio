"use client";

import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../movies";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useMemo, useRef, useState, useEffect, use } from "react";
import { useWindowSize } from "react-use";
import Marquee from "react-fast-marquee";

function Home() {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const margin = useTransform(scrollYProgress, [0, 0.3], ["4rem", "0rem"]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );
  const [ok, setOk] = useState(false);
  const [carouselVariant, setCarouselVariant] = useState("inactive");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
      // setOk(true);
    } else {
      setCarouselVariant("inactive");
      // setOk(false);
    }
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (ok) {
      const intervalId = setInterval(() => {
        handleClick(1); // Move the carousel to the next slide
      }, 3000);

      // Clean up the interval on component unmount
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ok]);

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const indexInArrayScope =
    ((activeIndex % movies.length) + movies.length) % movies.length;

  const moviesok = movies.sort((a, b) => a.id - b.id);

  const visibleItems = [...moviesok, ...moviesok].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const variants = {
    enter: ({ direction }) => {
      return { scale: 0.5, x: direction < 1 ? 50 : -50, opacity: 1 };
    },
    center: ({ position, direction }) => {
      return {
        scale: position() === "center" ? 1 : 0.9,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1,
      };
    },
    exit: ({ direction }) => {
      return { scale: 0.5, x: direction < 1 ? -50 : 50, opacity: 1 };
    },
  };

  function getZIndex({ position, direction }) {
    const indexes = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return indexes[position()];
  }

  function pro(movie) {
    //   scroll to  useMotionValueEvent(scrollYProgress, "change", (progress) =>  if (progress >= 0.67)
    if (carouselWrapperRef.current) {
      carouselWrapperRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      //wait for scroll to finish dont use
      setTimeout(() => {
        window.location.href = `./projects/${encodeURIComponent(movie)}`;
      }, 300);
    }
  }

  return (
    <motion.div
      // animate={carouselVariant}
      className="bg-background pb-16 pt-[100vh]"
      initial={{ scale: 0.2, opacity: 0 }}
      // animate={{ y: hidden ? "-100%" : 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
    >
      <motion.div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip  "
        style={{ marginLeft: margin, marginRight: margin }}
      >
        <motion.div
          onHoverStart={() => setOk(false)}
          onHoverEnd={() => carouselVariant === "active" && setOk(true)}
          className="sticky top-0 flex h-screen items-center"
        >
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={currentSlide}
            >
              {visibleItems.map((movie, index) => {
                let itemComponent;
                switch (index) {
                  case 0:
                    itemComponent = (
                      <motion.div
                        key={index}
                        style={{
                          opacity: postersOpacity,
                          x: posterTranslateXLeft,
                        }}
                        className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                      </motion.div>
                    );
                    break;
                  case 1:
                    itemComponent = (
                      <motion.div
                        key={index}
                        style={{ scale }}
                        className="relative cursor-pointer aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                        // onClick={() => {
                        //   window.location.href = `./projects/${encodeURIComponent(
                        //     movie.name
                        //   )}`;
                        // }}

                        variants={{
                          active: { opacity: 1, y: 0 },
                          inactive: { opacity: 0, y: 20 },
                          exit: { opacity: 0, y: 0 }, // Specify exit animation to center vertically
                        }}
                        transition={{ duration: 0.4 }}
                        exit="exit"
                        onHoverStart={() => setOk(false)}
                        onHoverEnd={() =>
                          carouselVariant === "active" && setOk(true)
                        }
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                        <motion.div
                          variants={{
                            active: { opacity: 1 },
                            inactive: { opacity: 0 },
                          }}
                          animate={carouselVariant}
                          className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-black md:flex-row md:justify-between md:gap-0 "
                        >
                          <p className="text-xl font-medium">{movie.title}</p>
                          {/* <a
                            href={`./projects/${encodeURIComponent(
                              movie.name
                            )}`}
                          >
                            Nominate
                          </a> */}

                          <button
                            className="group  text-gray-600 "
                            onClick={() => pro(movie.name)}
                          >
                            View Project{" "}
                            <span className="tracking-tighter group-hover:tracking-widest transition-all duration-300 ease-in-out">
                              {" "}
                              -{">"}
                            </span>
                          </button>
                        </motion.div>
                      </motion.div>
                    );
                    break;
                  case 2:
                    itemComponent = (
                      <motion.div
                        key={index}
                        style={{
                          opacity: postersOpacity,
                          x: posterTranslateXRight,
                        }}
                        className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                      </motion.div>
                    );
                    break;
                  default:
                    break;
                }

                return (
                  <motion.div
                    key={movie.name}
                    className="h-full w-full"
                    layout
                    custom={{
                      direction,
                      position: () => {
                        if (movie === visibleItems[0]) {
                          return "left";
                        } else if (movie === visibleItems[1]) {
                          return "center";
                        } else {
                          return "right";
                        }
                      },
                    }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                  >
                    {itemComponent}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-[9/16] w-[300px] z-[900] shrink-0 absolute left-0  flex justify-end overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
              onHoverStart={() => setOk(false)}
              onHoverEnd={() => carouselVariant === "active" && setOk(true)}
            >
              <button
                onClick={() => handleClick(-1)}
                className="prev-button text-lg text-gray-600  w-[200px]"
              >
                <span className="drop-shadow-2xl px-2 py-2 rounded-full font-medium bg-white/75 backdrop-blur">
                  {"<"}-
                </span>
              </button>
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 z-[900]  absolute right-0  flex justify-start overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
              onHoverStart={() => setOk(false)}
              onHoverEnd={() => carouselVariant === "active" && setOk(true)}
            >
              <button
                onClick={() => handleClick(1)}
                className="next-button text-lg text-gray-600   w-[200px]"
              >
                <span className="drop-shadow-2xl px-2 py-2 rounded-full font-medium bg-white/75 backdrop-blur  ">
                  -{">"}
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <h1
          onClick={() => {
            window.location.href = "./projects";
          }}
          className=" text-gray-600 font-medium cursor-pointer  group text-2xl px-4 mx-auto max-w-full sm:px-6 lg:px-8 relative "
        >
          <span className="px-7 sm:px-10">
            All Projects{" "}
            <span className="tracking-tighter group-hover:tracking-widest transition-all duration-300 ease-in-out">
              {" "}
              -{">"}
            </span>
          </span>
        </h1>
        <SmallVideoCarousel movies={randomMoviesSet1} speed="40" />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} speed="20" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const SmallVideoCarousel = ({ movies, speed }) => {
  return (
    <div className="overflow-clip">
      <div className=" relative flex gap-3">
        <Marquee
          gradient={false}
          speed={speed}
          className="w-full"
          autoFill={true}
          pauseOnHover
        >
          {movies.map((movie, index) => (
            <div
              className="aspect-video w-[40vw] mx-2 shrink-0 md:w-[23vw]"
              key={`${movie.name}-${index}`}
            >
              <img
                className="h-full w-full rounded-xl object-cover"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
