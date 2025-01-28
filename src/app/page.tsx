import MyInfo from "./components/MyInfo";
import SkillSet from "./components/SkillSet";
import Career from "./components/Career/Career";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center py-[5rem] px-[10rem]">
        <h2 className="font-bold text-6xl">About Me</h2>
        <MyInfo />
        <SkillSet />
        <Career />
      </div>
      <div className="w-full flex flex-col items-center bg-neutral-400 mt-[1rem] pt-[6rem] pb-[8rem] px-[10rem]">
        <h2 className="font-bold text-6xl text-white">My Projects</h2>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
      <div className="w-full flex flex-col items-center bg-neutral-500 pt-[6rem] pb-[10rem] px-[10rem]">
        <h2 className="font-bold text-6xl text-white">Contact Me</h2>
        <p className="mt-[2rem] text-2xl text-neutral-300 font-regular">
          Thank you for watching!
        </p>
        <div className="w-full grid grid-cols-2 gap-[3rem] mt-[4rem]">
          <Contact />
        </div>
      </div>
    </>
  );
}
