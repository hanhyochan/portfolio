import Image from "next/image";

const MyInfo = () => {
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-full h-[30rem] bg-neutral-200 rounded-[2rem] flex justify-between p-[3rem] gap-[3rem]">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-[2rem]">
            <h1 className="text-4xl font-medium">
              "플러스 알파(+α), 한효찬입니다."
            </h1>
            <p className="text-lg">
              더 나은 결과를 만들어내는 과정에는 항상 &nbsp;
              <strong>조금만 더</strong>
              &nbsp;해보는 자세가 있다고 생각합니다.
              <br />
              끝난 것에 안주하지 않고 &nbsp;
              <strong>다시 한번 더, 플러스 알파</strong>&nbsp;하여 꾸준하지만
              계속해서 발전하는 <br />
              개발자가 되도록 하겠습니다.
            </p>
          </div>
          <div className="flex gap-[1rem]">
            <div className="w-[3rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
              #+α
            </div>
            <div className="w-[4rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
              #끈기
            </div>
            <div className="w-[5rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
              #책임감
            </div>
            <div className="w-[7.5rem] h-[2rem] bg-neutral-400 flex justify-center items-center text-white rounded-[5rem]">
              #피드백_수용
            </div>
          </div>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={500}
          height={100}
        />
      </div>
    </div>
  );
};

export default MyInfo;
