declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sitekey: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    language: {
        type: StringConstructor;
        default: undefined;
    };
    orientation: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    reCaptchaCompat: {
        type: BooleanConstructor;
        default: boolean;
    };
    challengeContainer: {
        type: StringConstructor;
        default: undefined;
    };
    rqdata: {
        type: StringConstructor;
        default: undefined;
    };
    sentry: {
        type: BooleanConstructor;
        default: boolean;
    };
    custom: {
        type: BooleanConstructor;
        default: undefined;
    };
    apiEndpoint: {
        type: StringConstructor;
        default: string;
    };
    endpoint: {
        type: StringConstructor;
        default: undefined;
    };
    reportapi: {
        type: StringConstructor;
        default: undefined;
    };
    assethost: {
        type: StringConstructor;
        default: undefined;
    };
    imghost: {
        type: StringConstructor;
        default: undefined;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    responseId: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "reset" | "expired" | "challenge-expired" | "opened" | "closed" | "executed" | "rendered" | "verify" | "update:model-value" | "update:response-id")[], "error" | "reset" | "expired" | "challenge-expired" | "opened" | "closed" | "executed" | "rendered" | "verify" | "update:model-value" | "update:response-id", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sitekey: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    language: {
        type: StringConstructor;
        default: undefined;
    };
    orientation: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    reCaptchaCompat: {
        type: BooleanConstructor;
        default: boolean;
    };
    challengeContainer: {
        type: StringConstructor;
        default: undefined;
    };
    rqdata: {
        type: StringConstructor;
        default: undefined;
    };
    sentry: {
        type: BooleanConstructor;
        default: boolean;
    };
    custom: {
        type: BooleanConstructor;
        default: undefined;
    };
    apiEndpoint: {
        type: StringConstructor;
        default: string;
    };
    endpoint: {
        type: StringConstructor;
        default: undefined;
    };
    reportapi: {
        type: StringConstructor;
        default: undefined;
    };
    assethost: {
        type: StringConstructor;
        default: undefined;
    };
    imghost: {
        type: StringConstructor;
        default: undefined;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    responseId: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onError?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
    onExpired?: ((...args: any[]) => any) | undefined;
    "onChallenge-expired"?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onExecuted?: ((...args: any[]) => any) | undefined;
    onRendered?: ((...args: any[]) => any) | undefined;
    onVerify?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:response-id"?: ((...args: any[]) => any) | undefined;
}>, {
    tag: string;
    size: string;
    tabindex: string | number;
    orientation: string;
    reCaptchaCompat: boolean;
    language: string;
    sentry: boolean;
    custom: boolean;
    endpoint: string;
    assethost: string;
    imghost: string;
    reportapi: string;
    apiEndpoint: string;
    theme: string;
    challengeContainer: string;
    rqdata: string;
    modelValue: string;
    responseId: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
