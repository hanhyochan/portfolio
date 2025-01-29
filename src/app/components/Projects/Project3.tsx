"use client";

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

const Project3 = () => {
  const { width } = useWindowSize();

  return (
    <div
      className={classNames(
        "w-full mt-[5rem] min-h-[37rem] bg-neutral-middle p-[4rem] rounded-[3rem] grid grid-cols-2 gap-[3rem]",
        {
          "grid-cols-2": width > 1260,
          "grid-cols-1": width <= 1260,
        }
      )}
    >
      {width > 1260 && (
        <Image
          src="/images/desub.png"
          alt="Chaeuda"
          width={665}
          height={471}
          className="rounded-[0.5rem] w-[665px] h-[471px]"
        />
      )}
      <div className="flex flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[1rem] p-[1rem] bg-neutral-500 rounded-[0.5rem] w-full">
          <h3 className="text-3xl font-medium text-white">
            desub: 디자인 월 구독 서비스
          </h3>
          <div className="flex gap-[1rem] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              height="20"
            >
              <path
                d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
                fill="white"
              />
            </svg>
            <p className="text-white text-lg">
              2025.01 - &nbsp;&nbsp;|&nbsp;&nbsp; Team
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] text-lg text-white">
          <p className="font-extrabold">상세설명 및 주요기능</p>
          <p className="font-medium">디자인 업무 및 상담 월 구독 서비스</p>
          <p>• 사이트 내 애니메이션 및 모션(진행중)</p>
          <p>• 자체 회원가입/로그인, 구글 소셜 회원가입/로그인 구현(예정)</p>
          <p>• 결제 기능 구현(예정)</p>
        </div>
        <div className="flex flex-col gap-[0.5rem] text-lg text-white">
          <p className="font-extrabold">사용기술</p>
          <div className="flex gap-[1rem] mt-[0.5rem]">
            <div className="w-[5rem] h-[2rem] bg-black flex justify-center items-center text-white rounded-[5rem]">
              Nextjs
            </div>
            <div className="w-[7.5rem] h-[2rem] bg-typescript-color flex justify-center items-center text-white rounded-[5rem]">
              TypeScript
            </div>
            <div className="w-[8.5rem] h-[2rem] bg-tailwindCSS-color flex justify-center items-center text-white rounded-[5rem]">
              TailwindCSS
            </div>
          </div>
        </div>
        <div className="flex gap-[1.5rem] mt-[0.5rem]">
          <a
            href="https://github.com/oz-dbre/desub_FE/tree/develop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-lg flex items-center gap-[0.5rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
