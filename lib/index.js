"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var bodyParser = __importStar(require("body-parser"));
var express = require("express");
dotenv.config();
var app = express();
var router = express.Router();
router.use(bodyParser.text());
console.log(process.env.CHARGILY_APP_SECRET);
app.post('/webhook-response', function (req, res) {
    res.send(req['body']);
    //
    // const signature = req.header('Signature')
    // const ress = DefaultSignatureValidator.isValid(signature, process.env.CHARGILY_APP_SECRET, req.body)
    // res.send(ress)
});
app.listen(process.env.PORT, function () {
    console.log("The application is running on port ".concat(process.env.PORT));
});
//
// const invoice = new Invoice()
// invoice.amount = 1000
// invoice.invoiceNumber = 54584
// invoice.client = "chawki mahdi"
// invoice.mode = Mode.CIB
//
// invoice.discount = 0
//
//
// // const  Invoice = new conf.Invoice()
//  invoice.webhookUrl = 'https://www.youtube.com/'
//  invoice.backUrl = 'https://www.youtube.com/'
// invoice.appKey = "mg6apGyvhaEO3cl3AWYsmkFLdXvuTCTOIl9LIHKhwefGfgCAp0bRoeb7iL8zikgK"
//
// export interface ICheckoutUrl {
//     checkout_url : string
// }
// export const createPayment = async (invoice: Invoice) => {
//     const inv : IInvoice = {
//         amount : invoice.amount,
//         invoice_number : invoice.invoiceNumber,
//         client : invoice.client,
//         mode : invoice.mode,
//         webhook_url : invoice.webhookUrl,
//         back_url : invoice.backUrl,
//         discount : invoice.discount,
//     }
//
//     try {
//         let res : any
//         const {data} = await  axios.post<ICheckoutUrl>(
//             EPAY_CHARGILY_URL,
//             inv,
//             {
//                 headers: {
//                     Accept: "application/json",
//                     "X-Authorization": invoice.appKey,
//                 },
//                 timeout: 1000
//             },
//         ).then((response) => {
//             return res = response
//         })
//         return  data
//         // console.log(JSON.stringify(data.checkout_url, null, 4));
//     }catch (error){
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             // @ts-ignore
//             console.log('errors : ', error.response.data.errors);
//             // 👇️ error: AxiosError<any, any>
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// };
//
// console.log(createPayment(invoice))
//
