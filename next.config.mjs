/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'pjughuiqwjdzamdzzrgb.supabase.co',
        port: '',
        pathname:
          '/storage/v1/object/public/cabin-images/**',
      },
      {
        protocol: 'https',
        hostname:
          'dclaevazetcjjkrzczpc.supabase.co',
        port: '',
        pathname:
          '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  //   output: 'export',
};

export default nextConfig;
