import Education1 from "./Education1";
import Company from "./Company";
import Education2 from "./Education2";

const Career = () => {
  return (
    <div className="w-full mt-[5rem] py-[3rem] border-t-2 border-neutral-400 flex flex-col gap-[3rem]">
      <h3 className="text-3xl font-bold text-neutral-600">
        Education / Career
      </h3>
      <div className="w-full grid grid-cols-3 gap-[3rem]">
        <Education1 />
        <Company />
        <Education2 />
      </div>
    </div>
  );
};

export default Career;
