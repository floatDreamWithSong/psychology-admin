import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { fileURLToPath, URL } from "node:url";
import { codeInspectorPlugin } from "code-inspector-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		codeInspectorPlugin({
			bundler: "vite",
			hotKeys: ["ctrlKey", "altKey"],
		}),
		devtools(),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			enableRouteGeneration: false,
		}),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		tailwindcss(),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"react-router": ["@tanstack/react-router"],
					"react-query": ["@tanstack/react-query"],
					"react-table": ["@tanstack/react-table"],
					utils: [
						"axios",
						"clsx",
						"tailwind-merge",
						"class-variance-authority",
						"zod",
					],
					charts: ["recharts"],
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@admin": fileURLToPath(
				new URL("./src/routes/_authenticated/admin", import.meta.url),
			),
		},
	},
});
