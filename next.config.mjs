/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.spdigital.cl",
                port: '',
            },
            {
                protocol: "https",
                hostname: "i.blogs.es",
                port: '',
            },
            {
                protocol: "https",
                hostname: "goldengamers.cl",
                port: '',
            },
            {
                protocol: "https",
                hostname: "www.asus.com",
                port: '',
            }
            ,
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: '',
            }
        ]
    }
};

export default nextConfig;
