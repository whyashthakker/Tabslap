import nextMdx from '@next/mdx'

const withMDX = nextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
        },
        {
            protocol: 'https',
            hostname: 'ph-avatars.imgix.net',
        },
        {
            protocol: 'https',
            hostname: 'api.producthunt.com',
        },
        {
            protocol: 'http',
            hostname: 'localhost',
        },
    ],
        // domains: ['localhost', 'api.producthunt.com', 'pbs.twimg.com', 'ph-avatars.imgix.net'],
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "chrome-extension://pkomeokalhjlopcgnoefibpdhphfcgam" }, 
                  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ],
            },
        ];
    },
    async rewrites() {
        return [
          {
            source: '/api/openai/free-comments-generate-daily/',
            destination: 'https://olly.social/api/openai/free-comments-generate-daily/',
          },
        ];
      },
}

const mdxConfig = withMDX(nextConfig);

export default mdxConfig;
