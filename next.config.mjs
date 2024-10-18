/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'i.pravatar.cc'},
            {hostname: 'avatars.githubusercontent.com'}
        ],
    }
};

export default nextConfig;
