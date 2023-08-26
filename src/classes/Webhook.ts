import * as crypto from 'crypto';
const sigHashAlg = 'sha256';
const sigPrefix = '';

export interface ISignatureValidator {
  isValid(signature: any, secretKey: any, data: any): boolean;
}

export class DefaultSignatureValidator implements ISignatureValidator {
  static isValid(signature: any, secretKey: any, data: any): boolean {
    if (!signature) {
      return false;
    }

    // Use the passed secretKey or fallback to the environment variable
    const computedSecretKey = secretKey || process.env.CHARGILY_APP_SECRET;
    if (computedSecretKey === undefined) {
      throw new Error(
        'The webhook signing secret is not set. Make sure that the `CHARGILY_APP_SECRET` config key is set to the correct value.'
      );
    }

    const computedSignature = crypto.createHmac(sigHashAlg, secretKey);
    const digest = Buffer.from(
      sigPrefix + computedSignature.update(data).digest('hex'),
      'utf8'
    );

    if (
      signature.length !== digest.length ||
      !crypto.timingSafeEqual(digest, signature)
    ) {
      throw new Error('The signature is invalid.');
    }

    console.log('The signature is valid');
    return true;
  }

  // For completeness, you might want the instance method too. But you can remove it if unnecessary.
  isValid(signature: string, secretKey: string, responseData: object): boolean {
    return DefaultSignatureValidator.isValid(
      signature,
      secretKey,
      responseData
    );
  }
}
