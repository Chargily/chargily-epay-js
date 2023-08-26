import { DefaultSignatureValidator } from '../classes/Webhook';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const PORT = 4000;
const app = express();
const sigHeaderName = 'Signature';

// load env variables
dotenv.config();

// format requests
app.use(
  bodyParser.json({
    verify: (req: any, _res, buf, encoding: any) => {
      if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
      }
    },
  })
);

app.post('/validator', (req: any, res) => {
  const signature = Buffer.from(req.get(sigHeaderName) || '', 'utf8');
  let rs = DefaultSignatureValidator.isValid(
    signature,
    process.env.CHARGILY_APP_SECRET!,
    req.rawBody
  );
  // returns true if the signature is valid, throws error if invalid

  res.send(rs);
});

app.listen(PORT, () => {
  console.log('🪝 Webhook live at http://localhost:' + PORT);
});
