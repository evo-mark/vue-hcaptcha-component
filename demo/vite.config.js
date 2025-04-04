import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig(({ mode }) => {
	const alias =
		mode === "development"
			? {
					"vue-hcaptcha-component": resolve("../src"),
				}
			: {};

	return {
		resolve: {
			alias,
		},
		base: "/vue-hcaptcha-component/",
		assetsDir: "",
		plugins: [tailwindcss(), vue()],
	};
});
