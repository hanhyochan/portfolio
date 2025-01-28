import "@/styles/main.scss";
import MyInfo from "./components/MyInfo";
import SkillSet from "./components/SkillSet";
import Career from "./components/Career";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center py-[5rem] px-[10rem]">
      <h2 className="font-bold text-6xl">HYO_PORTFOLIO</h2>
      <MyInfo />
      <SkillSet />
      <Career />
    </div>
  );
}
