/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.spdigital.cl",
                port: '',
            }
        ]
    }
};

export default nextConfig;
