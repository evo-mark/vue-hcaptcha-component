declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sitekey: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: StringConstructor;
        default: any;
    };
    tabindex: {
        type: StringConstructor;
        default: any;
    };
    language: {
        type: StringConstructor;
        default: any;
    };
    reCaptchaCompat: {
        type: BooleanConstructor;
        default: boolean;
    };
    challengeContainer: {
        type: StringConstructor;
        default: any;
    };
    rqdata: {
        type: StringConstructor;
        default: any;
    };
    sentry: {
        type: BooleanConstructor;
        default: boolean;
    };
    custom: {
        type: BooleanConstructor;
        default: any;
    };
    apiEndpoint: {
        type: StringConstructor;
        default: string;
    };
    endpoint: {
        type: StringConstructor;
        default: any;
    };
    reportapi: {
        type: StringConstructor;
        default: any;
    };
    assethost: {
        type: StringConstructor;
        default: any;
    };
    imghost: {
        type: StringConstructor;
        default: any;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "reset" | "expired" | "challenge-expired" | "opened" | "closed" | "executed" | "rendered" | "verify")[], "error" | "reset" | "expired" | "challenge-expired" | "opened" | "closed" | "executed" | "rendered" | "verify", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sitekey: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: StringConstructor;
        default: any;
    };
    tabindex: {
        type: StringConstructor;
        default: any;
    };
    language: {
        type: StringConstructor;
        default: any;
    };
    reCaptchaCompat: {
        type: BooleanConstructor;
        default: boolean;
    };
    challengeContainer: {
        type: StringConstructor;
        default: any;
    };
    rqdata: {
        type: StringConstructor;
        default: any;
    };
    sentry: {
        type: BooleanConstructor;
        default: boolean;
    };
    custom: {
        type: BooleanConstructor;
        default: any;
    };
    apiEndpoint: {
        type: StringConstructor;
        default: string;
    };
    endpoint: {
        type: StringConstructor;
        default: any;
    };
    reportapi: {
        type: StringConstructor;
        default: any;
    };
    assethost: {
        type: StringConstructor;
        default: any;
    };
    imghost: {
        type: StringConstructor;
        default: any;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onError?: (...args: any[]) => any;
    onReset?: (...args: any[]) => any;
    onExpired?: (...args: any[]) => any;
    "onChallenge-expired"?: (...args: any[]) => any;
    onOpened?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    onExecuted?: (...args: any[]) => any;
    onRendered?: (...args: any[]) => any;
    onVerify?: (...args: any[]) => any;
}>, {
    tag: string;
    size: string;
    tabindex: string;
    sentry: boolean;
    custom: boolean;
    endpoint: string;
    assethost: string;
    imghost: string;
    reportapi: string;
    theme: string;
    language: string;
    reCaptchaCompat: boolean;
    challengeContainer: string;
    rqdata: string;
    apiEndpoint: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
