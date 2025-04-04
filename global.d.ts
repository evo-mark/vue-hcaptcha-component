import { HCAPTCHA_LOAD_FN_NAME } from "./src/api-endpoint";
export {};

declare global {
	interface Window {
		hcaptcha: unknown;
		[HCAPTCHA_LOAD_FN_NAME]: unknown;
	}
}
