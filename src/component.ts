import { h, defineComponent, onMounted, onUnmounted, ref, shallowRef } from "vue";
import { loadApiEndpointIfNotAlready } from "./api-endpoint";

declare const window: Window &
	typeof globalThis & {
		hcaptcha: unknown;
	};

export default defineComponent({
	name: "hCaptcha",
	props: {
		sitekey: {
			type: String,
			required: true,
		},
		theme: {
			type: String,
			default: "light",
			validator: (v: string) => ["light", "dark"].includes(v),
		},
		size: {
			type: String,
			default: "normal",
			validator: (v: string) => ["normal", "compact"].includes(v),
		},
		tabindex: {
			type: [String, Number],
			default: 0,
		},
		language: {
			type: String,
			default: undefined,
		},
		orientation: {
			type: String,
			default: "landscape",
			validator: (v: string) => ["portrait", "landscape"].includes(v),
		},
		reCaptchaCompat: {
			type: Boolean,
			default: true,
		},
		challengeContainer: {
			type: String,
			default: undefined,
		},
		rqdata: {
			type: String,
			default: undefined,
		},
		sentry: {
			type: Boolean,
			default: true,
		},
		custom: {
			type: Boolean,
			default: undefined,
		},
		apiEndpoint: {
			type: String,
			default: "https://hcaptcha.com/1/api.js",
		},
		endpoint: {
			type: String,
			default: undefined,
		},
		reportapi: {
			type: String,
			default: undefined,
		},
		assethost: {
			type: String,
			default: undefined,
		},
		imghost: {
			type: String,
			default: undefined,
		},
		tag: {
			type: String,
			default: "div",
		},
		id: {
			type: String,
			default: "hcap-script",
		},
		modelValue: {
			type: String,
			default: "",
		},
		responseId: {
			type: String,
			default: "",
		},
	},
	emits: [
		"error",
		"reset",
		"expired",
		"challenge-expired",
		"opened",
		"closed",
		"executed",
		"rendered",
		"verify",
		"update:model-value",
		"update:response-id",
	],
	setup(props, { emit, expose }) {
		const el = ref(null);
		const widgetId = ref();
		const hcaptcha = shallowRef();
		const renderedCb = ref();

		/* *********************************************
		 * LISTENERS
		 * ******************************************* */
		const onReset = () => emit("reset");
		const onError = (err: Error) => {
			emit("error", err);
			reset();
		};
		const onExpired = () => emit("expired");
		const onChallengeExpired = () => emit("challenge-expired");
		const onExecuted = () => emit("executed");
		const onOpen = () => emit("opened");
		const onClose = () => emit("closed");
		const onRendered = () => {
			emit("rendered");
			if (renderedCb.value && typeof renderedCb.value === "function") {
				renderedCb.value();
			}
		};
		const onVerify = () => {
			const token = hcaptcha.value.getResponse(widgetId.value);
			const eKey = hcaptcha.value.getRespKey(widgetId.value);
			emit("update:model-value", token);
			emit("update:response-id", eKey);
			emit("verify", { token, eKey });
		};

		/* *********************************************
		 * Reset / Destroy
		 * ******************************************* */
		const reset = () => {
			if (widgetId.value) {
				hcaptcha.value.reset(widgetId.value);
				onReset();
			} else {
				emit(
					"error",
					"Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.",
				);
			}
		};

		const teardown = () => {
			if (widgetId.value) {
				hcaptcha.value.reset(widgetId.value);
				hcaptcha.value.remove(widgetId.value);
			}
		};
		onUnmounted(teardown);

		/* *********************************************
		 * Activate
		 * ******************************************* */

		const onApiLoaded = () => {
			hcaptcha.value = window.hcaptcha;
			const opt = {
				sitekey: props.sitekey,
				theme: props.theme,
				size: props.size,
				tabindex: props.tabindex,
				orientation: props.orientation,
				callback: onVerify,
				"expired-callback": onExpired,
				"chalexpired-callback": onChallengeExpired,
				"error-callback": onError,
				"open-callback": onOpen,
				"close-callback": onClose,
			} as Record<string, unknown>;
			if (props.challengeContainer) {
				opt["challenge-container"] = props.challengeContainer;
			}
			widgetId.value = hcaptcha.value.render(el.value, opt);
			if (props.rqdata) {
				hcaptcha.value.setData(widgetId.value, {
					rqdata: props.rqdata,
				});
			}
			onRendered();
		};

		onMounted(() => loadApiEndpointIfNotAlready(props).then(onApiLoaded).catch(onError));

		/* *********************************************
		 * Public Functions
		 * ******************************************* */
		const execute = () => {
			if (widgetId.value) {
				hcaptcha.value.execute(widgetId.value);
				onExecuted();
			} else {
				// execute after el is rendered
				// we use a custom cb since `$on` was removed in vue3
				renderedCb.value = () => {
					renderedCb.value = null;
					execute();
				};
			}
		};
		const executeAsync = (): Promise<void> => {
			if (widgetId.value) {
				onExecuted();
				return hcaptcha.value.execute(widgetId.value, { async: true });
			}
			let resolveFn: (value?: unknown) => void;
			const promiseFn = new Promise((resolve) => {
				resolveFn = resolve;
			});
			// Execute after el is rendered
			renderedCb.value = () => {
				renderedCb.value = null;
				resolveFn();
			};
			return promiseFn.then(executeAsync);
		};

		expose({
			execute,
			executeAsync,
			reset,
		});

		return () =>
			h(props.tag, {
				id: props.id,
				ref: el,
			});
	},
});
