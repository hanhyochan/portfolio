const Education1 = () => {
  return (
    <div className="h-[30rem] bg-neutral-100 rounded-[0.5rem] flex flex-col gap-[1rem] p-[2rem] justify-between">
      <div className="flex flex-col gap-[1.5rem]">
        <p className="text-neutral-400">2018.03 - 2022.02&nbsp; | &nbsp;졸업</p>
        <h3 className="text-2xl font-medium">
          인천가톨릭대학교 시각디자인학과
        </h3>

        <div className="flex flex-col gap-[0.5rem] text-lg">
          <p>• UIUX 디자인 학습</p>
          <p>• 브랜드 디자인 학습</p>
          <p>• 패키지 + 편집 디자인 학습</p>
          <p>• Rhino 3d 툴 학습</p>
        </div>
      </div>
      <div className="flex gap-[1rem]">
        <div className="w-[5rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
          #디자인
        </div>
        <div className="w-[5rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
          #UIUX
        </div>
        <div className="w-[4rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
          #팀업
        </div>
      </div>
    </div>
  );
};

export default Education1;
