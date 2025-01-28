import "@/styles/main.scss";
import MyInfo from "./components/MyInfo";
import SkillSet from "./components/SkillSet";
import Career from "./components/Career/Career";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center py-[5rem] px-[10rem]">
        <h2 className="font-bold text-6xl">About Me</h2>
        <MyInfo />
        <SkillSet />
        <Career />
      </div>
      <div className="w-full flex flex-col items-center h-[500rem] bg-neutral-400 pt-[6rem] pb-[5rem] px-[10rem]">
        <h2 className="font-bold text-6xl text-white">My Projects</h2>
        <p className="text-2xl font-medium text-white mt-[5rem]">FrontEnd</p>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </>
  );
}
