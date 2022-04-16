export interface ISignatureValidator {
    isValid(APP_KEY: string, secretKey: string, responseData: object): boolean;
}
export declare class DefaultSignatureValidator implements ISignatureValidator {
    static isValid(signature: string, secretKey?: string, responseData?: any): boolean;
    isValid(APP_KEY: string, secretKey: string, responseData: object): boolean;
}
export declare class ProcessWebhook {
}
