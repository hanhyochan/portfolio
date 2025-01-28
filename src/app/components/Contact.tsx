"use client";

import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
      <div className="bg-neutral-dark rounded-[0.5rem] p-[3rem] gap-[1rem]">
        <div className="flex gap-[1rem] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="25"
            height="25"
            fill="white"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
          </svg>
          <p className="text-white text-xl">hcartist@naver.com</p>
          <CopyToClipboard
            text={"hcartist@naver.com"}
            onCopy={() => setShowToast(true)}
          >
            <button className="w-[3rem] h-[3rem] rounded-[10rem] bg-neutral-600 flex justify-center items-center shadow-md shadow-neutral-800 transition-shadow duration-200 active:shadow-none cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                height="20"
                fill="white"
              >
                <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
              </svg>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <Toast isVisible={showToast} />
    </>
  );
};

export default Contact;
