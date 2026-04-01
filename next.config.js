/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone', // Better for shared hosting

    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'skyconsults.in' },
            { protocol: 'https', hostname: '*.skyconsults.in' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },

    experimental: {
        // REMOVED: optimizePackageImports (causing the "id" error)
        workerThreads: false,
        cpus: 1,
        webpackBuildWorker: false
    },

    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },

    webpack: (config) => {
        config.resolve.symlinks = false;
        return config;
    },

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;