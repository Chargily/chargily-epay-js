import {Request, Response, Router} from "express";
import * as dotenv from 'dotenv'
import * as bodyParser from 'body-parser';

import {DefaultSignatureValidator} from "./Webhook";

const express = require("express");
dotenv.config()
const app = express();
let router: Router = express.Router();

router.use(bodyParser.text());

console.log(process.env.CHARGILY_APP_SECRET)
app.post('/webhook-response',(req: Request, res: Response)=>{
    res.send(req['body'])
    //
    // const signature = req.header('Signature')
    // const ress = DefaultSignatureValidator.isValid(signature, process.env.CHARGILY_APP_SECRET, req.body)
    // res.send(ress)
})
app.listen(process.env.PORT, ()=>{
    console.log(`The application is running on port ${process.env.PORT}`)
})




















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
