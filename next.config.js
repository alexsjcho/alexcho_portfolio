/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repository = 'alexcho_portfolio' // replace with your repository name

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: isProduction ? `/${repository}` : '',
    assetPrefix: isProduction ? `/${repository}/` : '',
    trailingSlash: true,
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.watchOptions = {
                ignored: ['**/node_modules', '**/.next', '**/out'],
                aggregateTimeout: 300,
                poll: 1000,
            }
        }
        return config
    },
}

module.exports = nextConfig