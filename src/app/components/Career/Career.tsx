"use client";

import Education1 from "./Education1";
import Company from "./Company";
import Education2 from "./Education2";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

const Career = () => {
  const { width } = useWindowSize();

  return (
    <div className="w-full mt-[5rem] flex flex-col gap-[3rem]">
      <h3 className="text-3xl font-bold text-neutral-600">
        Education / Career
      </h3>
      <div
        className={classNames("w-full grid gap-[3rem]", {
          "grid-cols-3": width > 1000,
          "grid-cols-1": width <= 1000,
        })}
      >
        <Education2 />
        <Company />
        <Education1 />
      </div>
    </div>
  );
};

export default Career;
