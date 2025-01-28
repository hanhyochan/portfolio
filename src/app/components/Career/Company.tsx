const Company = () => {
  return (
    <div className="h-[30rem] bg-neutral-100 rounded-[0.5rem] flex flex-col gap-[1rem] p-[2rem] justify-between">
      <div className="flex flex-col gap-[1.5rem]">
        <p className="text-neutral-400">2022.04 - 2024.07</p>
        <h3 className="text-2xl font-medium">(주)네오비젼</h3>

        <div className="flex flex-col gap-[0.5rem] text-lg">
          <p>• 건물안내 키오스크 UIUX 디자인</p>
          <p>• 건물 자원 관리 통합 SI UI 디자인</p>
          <p>• 3d 건물 도면 디자인</p>
          <p>• 카드뉴스 컨텐츠 디자인</p>
        </div>
      </div>
      <div className="flex gap-[1rem]">
        <div className="w-[6rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #디자이너
        </div>
        <div className="w-[5rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #UIUX
        </div>
        <div className="w-[6rem] h-[2rem] bg-purple-400 flex justify-center items-center text-white rounded-[5rem]">
          #건물안내
        </div>
      </div>
    </div>
  );
};

export default Company;
