import Image from "next/image";

const SkillSet = () => {
  const frontSkills = [
    <Image
      src="/icons/icons8-html-5.svg"
      title="HTML5"
      alt="html5"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-css3.svg"
      title="CSS3"
      alt="css3"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-sass.svg"
      title="Sass"
      alt="sass"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-tailwindCss.svg"
      title="TailwindCss"
      alt="tailwindCss"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-js.svg"
      title="javascript"
      alt="js"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/typescript-svgrepo-com.svg"
      title="typescript"
      alt="ts"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-react-a-javascript-library-for-building-user-interfaces.svg"
      title="React"
      alt="react"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-next.svg"
      title="Next"
      alt="next"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/Azios.svg"
      title="Axios"
      alt="axios"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-redux.svg"
      title="Redux"
      alt="redux"
      width={70}
      height={70}
    />,
  ];

  const tools = [
    <Image
      src="/icons/icons8-amazon-aws.svg"
      title="HTML5"
      alt="HTML5"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-github의.svg"
      title="Github"
      alt="Github"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-피그마.svg"
      title="Figma"
      alt="Figma"
      width={60}
      height={60}
    />,
    <Image
      src="/icons/icons8-adobe-xd.svg"
      title="Adobe XD"
      alt="Adobe XD"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-어도비-포토샵.svg"
      title="Adobe Ps"
      alt="Adobe Ps"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/Adobe_Illustrator-Logo.wine.svg"
      title="Adobe Ai"
      alt="Adobe Ai"
      width={150}
      height={150}
    />,
    <Image
      src="/icons/icons8-어도비-인디자인.svg"
      title="Adobe Id"
      alt="Adobe Id"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/Jira.svg"
      title="Jira"
      alt="Jira"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/icons8-slack-replace-email,-text-messaging,-and-instant-messaging-for-your-team.svg"
      title="Slack'"
      alt="Slack"
      width={70}
      height={70}
    />,
    <Image
      src="/icons/rhinoceros-svgrepo-com.svg"
      title="Rhino3d"
      alt="Rhino3d"
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
        <div className="w-full grid grid-cols-5 grid-rows-2 gap-[1rem]">
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
        <div className="w-full grid grid-cols-5 grid-rows-2 gap-[1rem]">
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
