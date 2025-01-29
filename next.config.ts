import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint 빌드 오류 무시 예시
  },
};

export default nextConfig;
