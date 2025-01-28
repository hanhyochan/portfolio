import Image from "next/image";

const Project2 = () => {
  return (
    <div className="w-full mt-[5rem] h-[37rem] bg-neutral-middle flex gap-[3rem] p-[4rem] rounded-[3rem]">
      <Image
        src="/images/image.gif"
        alt="Chaeuda"
        width={0}
        height={0}
        className="rounded-[0.5rem] w-[665] h-[471px]"
      />
      <div className="flex flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[1rem] p-[1rem] bg-neutral-500 rounded-[0.5rem] w-[40rem]">
          <h3 className="text-3xl font-medium text-white">
            Hyo_Moive_OTT: 영화 소개 사이트
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
              2024.11 - 2025.01 &nbsp;&nbsp;|&nbsp;&nbsp; Solo
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] text-lg text-white">
          <p className="font-extrabold">상세설명 및 주요기능</p>
          <p className="font-medium">
            TMDB API에서 정보를 제공받아 영화를 소개하는 사이트
          </p>
          <p>• 자체 회원가입/로그인, 카카오 소셜 회원가입/로그인 기능</p>
          <p>• 영화 관련 정보 Rest API로 받아오기(fetch 사용)</p>
        </div>
        <div className="flex flex-col gap-[0.5rem] text-lg text-white">
          <p className="font-extrabold">사용기술</p>
          <div className="flex gap-[1rem] mt-[0.5rem]">
            <div className="w-[5rem] h-[2rem] bg-react-color flex justify-center items-center text-white rounded-[5rem]">
              React
            </div>
            <div className="w-[5rem] h-[2rem] bg-scss-color flex justify-center items-center text-white rounded-[5rem]">
              SCSS
            </div>
          </div>
        </div>
        <div className="flex gap-[1.5rem] mt-[0.5rem]">
          <a
            href="https://www.chaeuda.shop/"
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
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
            Live link
          </a>
          <a
            href="https://github.com/hanhyochan/hyo_movie_ott/tree/version-2"
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

export default Project2;
