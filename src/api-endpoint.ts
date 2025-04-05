const HCAPTCHA_LOAD_FN_NAME: string = "_hcaptchaOnLoad" as const;

interface Config {
	reCaptchaCompat: boolean;
	language: string;
	sentry: boolean;
	custom: boolean;
	endpoint: string;
	assethost: string;
	imghost: string;
	reportapi: string;
	apiEndpoint: string;
}
type ComponentConfig = Partial<Config>;

declare const window: Window &
	typeof globalThis & {
		[HCAPTCHA_LOAD_FN_NAME: string]: unknown;
	};

/**
 * Used to prevent loading api.js multiple times
 */
export const SCRIPT_ID: string = "hcaptcha-api-script-id" as const;

let resolveFn: (value?: unknown) => unknown;
let rejectFn: (value?: unknown) => unknown;
const promise = new Promise((resolve, reject) => {
	resolveFn = resolve;
	rejectFn = reject;
});

export function loadApiEndpointIfNotAlready(config: ComponentConfig): Promise<unknown> {
	if (window.hcaptcha) {
		// api.js is already present
		resolveFn();
		return promise;
	}
	if (document.getElementById(SCRIPT_ID)) {
		// api.js was already requested
		return promise;
	}
	// request api.js once
	window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;
	const scriptSrc = getScriptSrc(config);
	const script = document.createElement("script");
	script.id = SCRIPT_ID;
	if (scriptSrc) {
		script.src = scriptSrc;
	}
	script.async = true;
	script.defer = true;
	script.onerror = (event) => {
		console.error("Failed to load api: " + scriptSrc, event);
		rejectFn("Failed to load api.js");
	};
	document.head.appendChild(script);
	return promise;
}

export function getScriptSrc(config: ComponentConfig) {
	if (!config.apiEndpoint) {
		console.error("No hCaptcha API script defined");
		return "";
	}
	const scriptSrc = new URL(config.apiEndpoint);
	const attributes = {
		render: "explicit",
		onload: HCAPTCHA_LOAD_FN_NAME,
		recaptchacompat: config.reCaptchaCompat === false ? "off" : null,
		hl: config.language,
		sentry: config.sentry,
		custom: config.custom,
		endpoint: config.endpoint,
		assethost: config.assethost,
		imghost: config.imghost,
		reportapi: config.reportapi,
	};
	Object.entries(attributes).forEach(([key, value]) => {
		if (value) scriptSrc.searchParams.set(key, String(value));
	});

	return scriptSrc.toString();
}
