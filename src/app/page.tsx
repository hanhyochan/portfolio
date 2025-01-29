"use client";

import MyInfo from "./components/MyInfo";
import SkillSet from "./components/SkillSet";
import Career from "./components/Career/Career";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Contact from "./components/Contact";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="w-full flex flex-col items-center py-[5rem] lg:px-[10rem] md:px-[5rem] sm:px-[2rem]">
        <h2 className="font-bold text-6xl">About Me</h2>
        <MyInfo />
        <SkillSet />
        <Career />
      </div>
      <div className="w-full flex flex-col items-center bg-neutral-400 mt-[1rem] lg:px-[10rem] md:px-[5rem] sm:px-[2rem] pt-[6rem] pb-[8rem]">
        <h2 className="font-bold text-6xl text-white">My Projects</h2>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
      <div className="w-full flex flex-col items-center bg-neutral-500 pt-[6rem] pb-[10rem] lg:px-[10rem] md:px-[5rem] sm:px-[2rem]">
        <h2 className="font-bold text-6xl text-white">Contact Me</h2>
        <p className="mt-[2rem] text-2xl text-neutral-300 font-regular">
          Thank you for watching!
        </p>
        <div
          className={classNames("w-full grid gap-[3rem] mt-[4rem]", {
            "grid-cols-4": width > 1260,
            "grid-cols-2": width <= 1260,
          })}
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
