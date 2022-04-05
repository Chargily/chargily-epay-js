# Chargily ePay Gateway Js

![Chargily ePay Gateway](https://raw.githubusercontent.com/Chargily/epay-gateway-php/main/assets/banner-1544x500.png "Chargily ePay Gateway")

Integrate ePayment gateway with Chargily easily.
- Currently support payment by **CIB / EDAHABIA** cards and soon by **Visa / Mastercard**
- This is a **Js package**, If you are using another programing language [Browse here](https://github.com/Chargily/) or look to [API documentation](https://github.com/Chargily/epay-gateway-php/blob/master/README_API.md)

# Requirements
1. Node.js (Version 14) or later.
2. NPM
3. Get your API Key/Secret from [ePay by Chargily](https://epay.chargily.com.dz) dashboard for free

# Installation
1. Via npm (Recomended)
```bash
npm i chargily-epay-gateway
```
2. Download as ZIP
   We do not recommend this option. But be careful to download the updated versions every a while [Download](https://github.com/Chargily/epay-gateway-nodejs/releases/)


# Configurations

- Available Configurations

| key                   |  description                                                                                          | redirect url |  process url |
|-----------------------|-------------------------------------------------------------------------------------------------------|--------------|--------------|
| CHARGILY_APP_KEY               | must be string given by organization                                                                  |   required   |   required   |
| CHARGILY_APP_SECRET            | must be string given by organization                                                                  |   required   |   required   |
| back_url        | must be string and valid url                                                                          |   required   | not required |
| webhook_url        | must be string and valid url                                                                          |   required   | required |
| mode                  | must be in **CIB**,**EDAHABIA**                                                                       |   required   | not required |
| invoice_number       |  string or int                                                                                 |   required   | not required |
| client_name  | string                                                                                        |   required   | not required |
| client_email | must be valid email This is where client receive payment receipt after confirmation        |   required   | not required |
| amount      | must be numeric and greather or equal than  75                                                        |   required   | not required |
| discount    | must be numeric and between 0 and 99  (discount in %)                                     |   required   | not required |
| description  | must be string                                                                                        |   required   | not required |
