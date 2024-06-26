import Projectsection from "@/components/project/Projectsection";
import React from "react";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../../movies";
import ASSENTConnectPlus from "@/components/page_data/ASSENTConnectPlus";

function page({ params }) {
  const { name } = params;

  const movie = movies.find((movie) => movie.name === name);

  return (
    <div className="w-screen !overflow-x-hidden">
      <Projectsection imgurl={movie.poster} title={movie.title} />
      <div className="w-full h-44 px-[12vw]  text-black">
        <h1 className="text-5xl font-semibold text-black ">{movie.title}</h1>
        <p className="mt-2 leading-relaxed text-gray-700 text-lg ">
          {movie.type}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2  sm:mt-auto">
          {movie.tags.map((tag, index) => (
            <li
              className="bg-black/75 px-3 py-1 text-xs leading-loose uppercase tracking-wider text-white rounded-full "
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        {/* live links */}
        <div className=" gap-4 mt-4">
          Live :
          {movie.live.map((link, index) => (
            <a
              href={link}
              key={index}
              className=" ml-5 text-lg leading-loose uppercase tracking-wider text-black underline rounded-full "
              target="_blank"
            >
              {movie.id === 2
                ? index === 0
                  ? "Play Store"
                  : "App Store"
                : "Website"}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full h-full px-[12vw]  text-black">
        {movie.name === "ASSENTConnectPlus" && <ASSENTConnectPlus />}
      </div>
    </div>
  );
}

export default page;
