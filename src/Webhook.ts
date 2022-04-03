import {createHmac} from "crypto";


export interface ISignatureValidator{
    isValid(APP_KEY: string, secretKey:string, responseData: object ) : boolean
}
export class DefaultSignatureValidator implements ISignatureValidator{
    static isValid(signature: string, secretKey?: string,  responseData?: any): boolean {
        if (!signature){
            return false
        }

        secretKey = process.env.CHARGILY_APP_SECRET
        if (secretKey === undefined){
            throw new Error('The webhook signing secret is not set. Make sure that the `CHARGILY_APP_SECRET` config key is set to the correct value.')
        }

        const computedSignature = createHmac("sha256", secretKey).update(responseData).digest("hex")

        if (computedSignature !== signature){
            throw new Error('The signature is invalid.')
        }
        return true
    }

    isValid(APP_KEY: string, secretKey: string, responseData: object): boolean {
        return false;
    }
}

export class ProcessWebhook{

}
