/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	// Disable TypeScript checking at runtime since we check during build
	typescript: {
		ignoreBuildErrors: false,
	},
};

module.exports = nextConfig;
