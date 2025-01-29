"use client";

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

const MyInfo = () => {
  const { width } = useWindowSize();

  return (
    <div
      className={classNames(
        "mt-[5rem] w-full bg-neutral-100 rounded-[0.5rem] gap-[3rem]",
        {
          "h-[30rem]": width > 720,
          "grid grid-cols-2": width > 1169,
        }
      )}
    >
      <div className="flex flex-col justify-between p-[3rem]">
        <div className="flex flex-col gap-[2rem]">
          <h1 className="text-4xl font-bold">
            &quot;프론트엔드개발자, 한효찬입니다.&quot;
          </h1>
          {width > 720 && (
            <p className="text-lg font-medium">
              더 나은 결과를 만들어내는 과정에는 &nbsp;
              <strong className="font-extrabold">조금만 더</strong>
              &nbsp;해보는 자세가 있다고 생각합니다.
              <br />
              끝난 것에 안주하지 않고 끊임없이 고민해보며 가장 최선의 결과물을
              만들겠습니다.
            </p>
          )}
          <div className="flex flex-col gap-[0.5rem] text-lg">
            <div
              className={classNames(
                "bg-neutral-200 rounded-[0.5rem] flex gap-[1rem] items-center px-[1.5rem] py-[1rem]",
                { "justify-center": width < 720 }
              )}
            >
              {width > 1240 && (
                <Image
                  src="/icons/icons8-github의.svg"
                  title="Github"
                  alt="Github"
                  width={33}
                  height={33}
                />
              )}
              <a
                href="https://github.com/hanhyochan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                {width > 720 ? "https://github.com/hanhyochan" : "GitHub"}
              </a>
            </div>
            <div
              className={classNames(
                "bg-neutral-200 rounded-[0.5rem] flex gap-[1rem] items-center px-[1.5rem] py-[1rem]",
                { "justify-center": width < 720 }
              )}
            >
              {width > 1240 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                </svg>
              )}
              <a
                href="https://velog.io/@hcartist/series"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                {width > 720 ? "https://velog.io/@hcartist/series" : "Velog"}
              </a>
            </div>
          </div>
        </div>
        {width > 1531 && (
          <div className="flex gap-[1rem] z-10">
            <div className="w-[3.5rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
              #+α
            </div>
            <div className="w-[4rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
              #끈기
            </div>
            <div className="w-[5rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
              #책임감
            </div>
            <div className="w-[7.5rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
              #피드백_수용
            </div>
          </div>
        )}
      </div>

      {width > 1169 && (
        <div className="relative w-full h-full">
          <Image
            src="/images/profile.png"
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="opacity-80 rounded-r-[0.6rem]"
          />
        </div>
      )}
    </div>
  );
};

export default MyInfo;
