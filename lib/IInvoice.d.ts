import { Mode } from "./configuration";
export interface IInvoice {
    appKey?: string;
    client: string;
    amount: number;
    discount: number;
    invoice_number: number;
    back_url: string;
    webhook_url: string;
    mode: Mode;
}
export interface ICheckoutURL {
    checkoutUrl: any;
}
