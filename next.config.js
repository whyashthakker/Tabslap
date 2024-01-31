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
}

module.exports = nextConfig
