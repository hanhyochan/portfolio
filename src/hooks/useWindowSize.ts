"use client"; // 클라이언트 사이드에서만 실행되도록 설정
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0, // 초기값을 0으로 설정
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: document.documentElement.clientWidth,
      });

      const handleResize = () => {
        setWindowSize({
          width: document.documentElement.clientWidth,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
