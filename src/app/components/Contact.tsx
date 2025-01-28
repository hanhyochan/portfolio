"use client";

import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

interface ToastProps {
  isVisible: boolean;
}

const Toast = ({ isVisible }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-[4rem] left-[1rem] bg-neutral-800 text-white px-3 py-2 rounded-md text-sm transform transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      복사되었습니다
    </div>
  );
};

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      {/* 이메일 */}
      <div className="bg-neutral-dark rounded-[0.5rem] flex justify-between items-center p-[2rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="white"
        >
          <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
        </svg>
        <p className="text-white text-xl">hcartist@naver.com</p>
        <CopyToClipboard
          text={"hcartist@naver.com"}
          onCopy={() => setShowToast(true)}
        >
          <button className="w-[2.5rem] h-[2.5rem] rounded-[10rem] bg-neutral-600 flex justify-center items-center shadow-md shadow-neutral-800 transition-shadow duration-200 active:shadow-none cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="17"
              height="17"
              fill="white"
            >
              <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
            </svg>
          </button>
        </CopyToClipboard>
      </div>
      {/* 전화번호 */}
      <div className="bg-neutral-dark rounded-[0.5rem] flex justify-between items-center p-[2rem]">
        <Image
          src="/icons/icons8-phone.svg"
          alt="phone"
          width={30}
          height={25}
          className="brightness-0 invert"
        />
        <p className="text-white text-xl">010-2760-4606</p>
        <CopyToClipboard text={"01027604606"} onCopy={() => setShowToast(true)}>
          <button className="w-[2.5rem] h-[2.5rem] rounded-[10rem] bg-neutral-600 flex justify-center items-center shadow-md shadow-neutral-800 transition-shadow duration-200 active:shadow-none cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="17"
              height="17"
              fill="white"
            >
              <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
            </svg>
          </button>
        </CopyToClipboard>
      </div>
      {/* 깃허브 */}
      <div className="bg-neutral-dark rounded-[0.5rem] flex justify-center items-center p-[2rem] gap-[1.2rem]">
        <Image
          src="/icons/icons8-github의.svg"
          title="Github"
          alt="Github"
          width={33}
          height={33}
          className="brightness-0 invert"
        />
        <a
          href="https://velog.io/@hcartist/series"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg"
        >
          https://github.com/hanhyochan
        </a>
      </div>
      {/* 벨로그 */}
      <div className="bg-neutral-dark rounded-[0.5rem] flex justify-center items-center p-[2rem] gap-[1.2rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="white"
        >
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
        </svg>
        <a
          href="https://velog.io/@hcartist/series"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg"
        >
          https://velog.io/@hcartist/series
        </a>
      </div>
      <Toast isVisible={showToast} />
    </>
  );
};

export default Contact;
