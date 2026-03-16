/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move reactCompiler out of experimental
  reactCompiler: true,
  
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;