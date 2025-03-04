/* next.config.ts */
// import SemiNext from '@douyinfe/semi-next';

import type { NextConfig } from "next";

// const Semi = SemiNext({})

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
};

export default nextConfig;
