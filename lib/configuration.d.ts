export declare enum Mode {
    CIB = "CIB",
    EDAHABIA = "EDAHABIA"
}
export declare const EPAY_CHARGILY_URL = "http://epay.chargily.com.dz/api/invoice";
export declare class Invoice {
    protected invoice: {};
    private _appKey;
    private _client;
    private _amount;
    private _discount;
    private _invoiceNumber;
    private _backUrl;
    private _webhookUrl;
    private _mode;
    get appKey(): string;
    set appKey(appKey: string);
    get client(): string;
    set client(client: string);
    get amount(): number;
    set amount(amount: number);
    get discount(): number;
    set discount(discount: number);
    get invoiceNumber(): number;
    set invoiceNumber(invoiceNumber: number);
    get backUrl(): string;
    set backUrl(backUrl: string);
    get webhookUrl(): string;
    set webhookUrl(webhookUrl: string);
    get mode(): Mode;
    set mode(mode: Mode);
}
