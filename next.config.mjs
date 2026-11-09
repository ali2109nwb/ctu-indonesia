const staticExport = process.env.WORKERS_CI === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(staticExport && { output: 'export' }),
  images: {
    unoptimized: staticExport,
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
