const Education2 = () => {
  return (
    <div className="h-[30rem] bg-neutral-100 rounded-[0.5rem] flex flex-col gap-[1rem] p-[2rem] justify-between">
      <div className="flex flex-col gap-[1.5rem]">
        <p className="text-neutral-400">
          2024.08 - 2025.02&nbsp; | &nbsp;수료예정
        </p>
        <h3 className="text-2xl font-medium">오즈코딩스쿨 프론트엔드 과정</h3>

        <div className="flex flex-col gap-[0.5rem] text-lg">
          <p>• HTML5, CSS3, Javascript 학습</p>
          <p>• Git/Github 학습</p>
          <p>• React, Redux 학습</p>
          <p>• Node.js, express 학습</p>
          <p>• aws 학습</p>
          <p>• 팀업 프로젝트 진행</p>
        </div>
      </div>
      <div className="flex gap-[1rem]">
        <div className="w-[7rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #프론트엔드
        </div>
        <div className="w-[5rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #개발자
        </div>
        <div className="w-[4rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #팀업
        </div>
      </div>
    </div>
  );
};

export default Education2;
