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
export declare const SCRIPT_ID: string;
export declare function loadApiEndpointIfNotAlready(config: ComponentConfig): Promise<unknown>;
export declare function getScriptSrc(config: ComponentConfig): string | undefined;
export declare function addQueryParamIfDefined(url: string | undefined, queryName: string, queryValue: string | number | boolean | undefined | null): string | undefined;
export {};
