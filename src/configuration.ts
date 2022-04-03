import axios from "axios";
export enum Mode {
  CIB = "CIB",
  EDAHABIA = "EDAHABIA",
}

export const EPAY_CHARGILY_URL = "http://epay.chargily.com.dz/api/invoice";

export class Invoice {

  protected invoice = {}
  private _appKey: string
  private _client: string
  private _amount: number
  private _discount: number
  private _invoiceNumber: number
  private _backUrl: string
  private _webhookUrl: string
  private _mode: Mode

  get appKey() {
    return this._appKey;
  }

  set appKey(appKey) {
    this._appKey = appKey;
  }

  get client() {
    return this._client;
  }

  set client(client) {
    if (typeof client === "undefined")
      throw new Error("client must be declared");
    this._client = client;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (amount <= 75) throw new Error("amount must be more or equal 100");
    this._amount = amount;
  }

  public get discount() {
    return this._discount;
  }

  public set discount(discount) {
    if (discount < 0 || discount >= 100) {
      throw new Error("The percentage is invalid");
    }
    this._discount = discount ?? 0;
  }

  get invoiceNumber() {
    return this._invoiceNumber;
  }

  set invoiceNumber(invoiceNumber) {
    this._invoiceNumber = invoiceNumber;
  }

  get backUrl() {
    return this._backUrl;
  }

  set backUrl(backUrl) {
    this._backUrl = backUrl;
  }

  get webhookUrl() {
    return this._webhookUrl;
  }

  set webhookUrl(webhookUrl) {
    this._webhookUrl = webhookUrl;
  }

  get mode() {
    return this._mode;
  }

  set mode(mode) {
    this._mode = mode;
  }
}
