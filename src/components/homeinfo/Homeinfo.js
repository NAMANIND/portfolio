"use client";

import React from "react";
import { movies } from "../../movies";
import { motion } from "framer-motion";

function Homeinfo() {
  const moviesok = movies.sort((a, b) => a.id - b.id);
  return (
    <div className="h-screen w-screen text-black font-normal text-xl px-4 mx-auto max-w-full sm:px-6 lg:px-8">
      <div className="sm:px-10 w-100 flex gap-52 flex-col  px-7">
        <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:text-3xl text-xl leading-[150%]    tracking-tight"
        >
          {/* <h2></h2> */}
          <p>
            Hi, I{"'"}m Naman Rai. With a proven track record of developing
            impactful digital solutions, I bring over 2 years of experience in
            full-stack development, specializing in cross-platform applications
            and dynamic website designs. I thrive on collaboration and am
            dedicated to delivering exceptional results that drive innovation in
            the tech community.
          </p>
        </motion.div>

        <div className=" flex sm:flex-row flex-col justify-between flex-grow">
          <motion.div
            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="sm:w-1/3 w-full"
          >
            <h2 className="text-3xl text-gray-600 font-medium">Capabilities</h2>
            <ul>
              <li>
                {/* <strong>Development Leadership:</strong> Spearheading
                development teams to success, ensuring projects are delivered on
                time and within budget. */}
                Development Leadership
              </li>
              <li>
                {/* <strong>UI/UX Design:</strong> Crafting intuitive user
                experiences through thoughtful interface design and usability
                testing. */}
                UI Development
              </li>
              <li>
                {/* <strong>Creative Execution:</strong> Transforming complex ideas
                into innovative digital solutions with passion and creativity.
              </li> */}
                Creative Execution
              </li>
              <li>
                {/* <strong>Product Design:</strong> Bringing ideas to life through
                comprehensive product development and iteration. */}
                Product Design
              </li>
              <li>
                {/* <strong>Brand Identity:</strong> Establishing and enhancing
                brand identities through strategic design and visual
                storytelling. */}
                Brand Identity
              </li>
            </ul>
          </motion.div>

          <motion.div
            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="sm:w-1/2 w-full"
          >
            {/* <strong>Insight:</strong> Leveraging insights to inform design
                decisions and drive business growth. */}

            <h2 className="text-3xl text-gray-600 font-medium">Insight</h2>

            <p>
              I specialize in developing cutting-edge digital solutions that
              shape the future of brands. Whether it{"'"}s launching new
              products or optimizing existing ones, I ensure your brand stands
              out and makes a lasting impact.
            </p>
          </motion.div>
        </div>

        {/* <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className=" flex flex-row justify-between flex-grow"
        >
          <div></div>

          <div className="w-1/2">
            <h2 className="text-3xl text-gray-600 font-medium">Testimonials</h2>
            <div className="flex gap-20 flex-col">
              <div>
                <p>
                  <em>
                    I would highly recommend Naman for all that he brings to the
                    table. Not only is he one of the strongest developers I have
                    worked with, but he also brings an unparalleled ability to
                    lead and inspire teams. With him on your project, you can
                    expect nothing short of excellence.
                  </em>
                </p>
                <p className="mt-5">- Gagan Mauli, Head of Digital Labs</p>
              </div>
              <div>
                <p>
                  <em>
                    I had the pleasure of collaborating with Naman on a
                    high-pressure project, and I was impressed by his ability to
                    remain calm and creative under challenging circumstances. He
                    consistently delivers exceptional results and is a valuable
                    asset to any team.
                  </em>
                </p>
                <p className="mt-5">
                  - Raffy Karamanian, Head of Fintech at [Company Name]
                </p>
              </div>
              <div>
                <p>
                  <em>
                    Naman{"'"}s dedication and expertise were evident throughout
                    our collaboration. He is not only highly skilled but also a
                    great team player who fosters a positive and productive work
                    environment. I look forward to working with him again in the
                    future.
                  </em>
                </p>
                <p className="mt-5">
                  - Philippa Kevan, Senior Marketing Manager at [Company Name]
                </p>
              </div>
              <div>
                <p>
                  <em>
                    I have had the pleasure of working with Naman on multiple
                    digital projects, and I have always been impressed by his
                    customer-centric approach and attention to detail. His
                    solutions consistently exceed expectations and drive
                    tangible results.
                  </em>
                </p>
                <p className="mt-5">
                  {" "}
                  Tim Buckler, Product Director at [Company Name]
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}

        <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl text-gray-600 font-medium">Output</h2>
          <p className="text-4xl">Websites, apps, extentions.</p>
        </motion.div>

        <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className=" flex sm:flex-row flex-col justify-between flex-grow"
        >
          <div></div>

          <div className="sm:w-1/2 w-full">
            <h2 className="text-3xl text-gray-600 font-medium">Clients</h2>
            <p>
              ASSENT STEEL INDUSTRIES, The Influence Exchange Confex & Awards,
              Bitnib Design, Social Pulze.
            </p>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className=" flex sm:flex-row flex-col justify-between flex-grow"
        >
          <h2 className="text-3xl text-gray-600 font-medium">Projects</h2>
          <ul className="sm:w-1/2 w-full">
            {moviesok.map((movie) => (
              <li
                key={movie.id}
                className=" leading-loose mt-5 border-b-2  hover:border-black   group
                
                transition-all duration-300 ease-in-out
                
                "
              >
                <a
                  className="flex sm:flex-row  flex-col justify-between"
                  href={`./projects/${encodeURIComponent(movie.name)}`}
                >
                  {movie.title}
                  <span className="     flex sm:flex-row  flex-col">
                    <span
                      className="
                 sm:opacity-0
                 group-hover:opacity-100
                 transition-all duration-300 ease-in-out
            
                 opacity-100

                "
                    >
                      {movie.type}-{" "}
                    </span>
                    View Project
                  </span>
                </a>{" "}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className=" flex sm:flex-row flex-col justify-between flex-grow mt-20"
        >
          <div></div>
          <div className="sm:w-1/2 w-full">
            <p className="text-2xl text-gray-600">
              Want to collaborate on your next project? <br /> I would love to
              hear from you.
              <span className="text-black font-medium">
                <br />
                hello@namanrai.tech
                <br />
                <a
                  href="https://www.linkedin.com/in/namannrai/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </p>
          </div>
        </motion.div>

        <div className="flex flex-row  justify-between  text-black  text-2xl font-medium items-end mb-10">
          <div>
            Naman rai
            <br />
            Full Stack Developer
          </div>

          <div className="text-gray-600">©2024</div>
        </div>
      </div>
    </div>
  );
}

export default Homeinfo;
