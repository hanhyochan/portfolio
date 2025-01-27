import Image from "next/image";
import "@/styles/main.scss";
import MyInfo from "./components/MyInfo";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center py-[5rem] px-[10rem]">
      <h2 className="font-bold text-6xl">HYO_PORTFOLIO</h2>
      <MyInfo />
    </div>
  );
}
