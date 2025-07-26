/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	// Disable TypeScript checking at runtime since we check during build
	typescript: {
		ignoreBuildErrors: false,
	},
	// Ensure clean standalone build
	experimental: {
		outputFileTracingRoot: __dirname,
	},
};

module.exports = nextConfig;
