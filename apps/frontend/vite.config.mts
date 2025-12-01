/// <reference types='vitest' />

import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => ({
	root: import.meta.dirname,
	cacheDir: "../../node_modules/.vite/apps/frontend",
	server: {
		port: 4200,
		host: "localhost",
	},
	preview: {
		port: 4200,
		host: "localhost",
	},
	plugins: [react(), tailwindcss(), nxViteTsPaths()],
	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [],
	// },
	build: {
		outDir: "./dist",
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	test: {
		setupFiles: ["src/setupTests.ts"],
		name: "@task-manager/frontend",
		watch: false,
		globals: true,
		environment: "jsdom",
		include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			provider: "v8",
			include: ["src"],
			exclude: [
				"src/__tests__/**",
				"src/components/ui/**/*",
				"src/components/**/index.ts",
				"src/env.ts",
				"src/main.tsx",
				"src/routeTree.gen.ts",
				"src/**/*.types.ts",
			],
		},
	},
}));
