"use client";

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

const SkillSet = () => {
  const { width } = useWindowSize();

  const frontSkills = [
    <Image
      key="html5"
      src="/icons/icons8-html-5.svg"
      title="HTML5"
      alt="html5"
      width={70}
      height={70}
    />,
    <Image
      key="css3"
      src="/icons/icons8-css3.svg"
      title="CSS3"
      alt="css3"
      width={70}
      height={70}
    />,
    <Image
      key="sass"
      src="/icons/icons8-sass.svg"
      title="Sass"
      alt="sass"
      width={70}
      height={70}
    />,
    <Image
      key="tailwindCss"
      src="/icons/icons8-tailwindCss.svg"
      title="TailwindCSS"
      alt="tailwindCss"
      width={70}
      height={70}
    />,
    <Image
      key="js"
      src="/icons/icons8-js.svg"
      title="JavaScript"
      alt="js"
      width={70}
      height={70}
    />,
    <Image
      key="ts"
      src="/icons/typescript-svgrepo-com.svg"
      title="TypeScript"
      alt="ts"
      width={70}
      height={70}
    />,
    <Image
      key="react"
      src="/icons/icons8-react-a-javascript-library-for-building-user-interfaces.svg"
      title="React"
      alt="react"
      width={70}
      height={70}
    />,
    <Image
      key="next"
      src="/icons/icons8-next.svg"
      title="Nextjs"
      alt="next"
      width={70}
      height={70}
    />,
    <Image
      key="axios"
      src="/icons/Azios.svg"
      title="Axios"
      alt="axios"
      width={70}
      height={70}
    />,
    <Image
      key="redux"
      src="/icons/icons8-redux.svg"
      title="Redux"
      alt="redux"
      width={70}
      height={70}
    />,
  ];

  const tools = [
    <Image
      key="AWS"
      src="/icons/icons8-amazon-aws.svg"
      title="AWS"
      alt="AWS"
      width={70}
      height={70}
    />,
    <Image
      key="vercel"
      src="/icons/logo-vercel-svgrepo-com.svg"
      title="Vercel"
      alt="Vercel"
      width={70}
      height={70}
    />,
    <Image
      key="Github"
      src="/icons/icons8-github의.svg"
      title="Github"
      alt="Github"
      width={70}
      height={70}
    />,
    <Image
      key="Figma"
      src="/icons/icons8-피그마.svg"
      title="Figma"
      alt="Figma"
      width={60}
      height={60}
    />,
    <Image
      key="AdobeXD"
      src="/icons/icons8-adobe-xd.svg"
      title="Adobe XD"
      alt="Adobe XD"
      width={70}
      height={70}
    />,
    <Image
      key="AdobePs"
      src="/icons/ps.svg"
      title="AdobePs"
      alt="AdobePs"
      width={70}
      height={70}
    />,
    <Image
      key="AdobeAi"
      src="/icons/Adobe_Illustrator-Logo.wine.svg"
      title="AdobeAi"
      alt="AdobeAi"
      width={150}
      height={150}
    />,
    <Image
      key="AdobeId"
      src="/icons/id.svg"
      title="AdobeId"
      alt="AdobeId"
      width={70}
      height={70}
    />,
    <Image
      key="Jira"
      src="/icons/Jira.svg"
      title="Jira"
      alt="Jira"
      width={70}
      height={70}
    />,
    <Image
      key="Slack"
      src="/icons/icons8-slack-replace-email,-text-messaging,-and-instant-messaging-for-your-team.svg"
      title="Slack'"
      alt="Slack"
      width={70}
      height={70}
    />,
  ];

  return (
    <div className="w-full mt-20 grid grid-cols-2 gap-[3rem]">
      <div className="w-full h-[30rem] border border-neutral-400 rounded-[2rem] flex flex-col gap-[3rem] p-[3rem]">
        <h3 className="text-2xl font-bold text-neutral-400">
          FrontEnd / language
        </h3>
        <div
          className={classNames("w-full grid gap-[1rem]", {
            "grid-cols-5 grid-rows-2": width > 1200,
            "grid-cols-3 grid-rows-3": width <= 1200,
          })}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="aspect-square w-full border border-neutral-300 flex justify-center items-center"
            >
              {frontSkills[index % frontSkills.length]}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[30rem] border border-neutral-400 rounded-[2rem] flex flex-col gap-[3rem] p-[3rem]">
        <h3 className="text-2xl font-bold text-neutral-400">Tools</h3>
        <div
          className={classNames("w-full grid gap-[1rem]", {
            "grid-cols-5 grid-rows-2": width > 1200,
            "grid-cols-3 grid-rows-3": width <= 1200,
          })}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="aspect-square w-full border border-neutral-300 flex justify-center items-center"
            >
              {tools[index % tools.length]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
