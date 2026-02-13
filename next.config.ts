import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
		// Optimize images for better performance
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	// Optimize fonts
	async headers() {
		return [
			{
				source: '/fonts/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
	// Enable experimental features for better performance
	experimental: {
		optimizePackageImports: ['swiper', '@reduxjs/toolkit'],
	},
	// Optimize build output
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Reduce bundle size and prevent unnecessary polyfills
	webpack: (config, { isServer }) => {
		// Optimize Swiper bundle size
		if (!isServer) {
			config.resolve.alias = {
				...config.resolve.alias,
				'swiper/css': 'swiper/swiper.min.css',
				'swiper/css/pagination': false, // Disable if not used
			};
		}

		// Prevent webpack from adding unnecessary polyfills for modern browsers
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				// Remove polyfills for Node.js globals that aren't needed in modern browsers
				assert: false,
				buffer: false,
				console: false,
				constants: false,
				crypto: false,
				domain: false,
				events: false,
				http: false,
				https: false,
				os: false,
				path: false,
				punycode: false,
				process: false,
				querystring: false,
				stream: false,
				string_decoder: false,
				sys: false,
				timers: false,
				tty: false,
				url: false,
				util: false,
				vm: false,
				zlib: false,
			};
		}

		return config;
	},
};

export default withNextIntl(nextConfig);
