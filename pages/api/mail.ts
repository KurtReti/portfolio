// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const message = `
    Subject: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'kurt.reti@gmail.com',
    from: 'hello@kurtreti.dev',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
  

  mail.send(data);

  res.status(200).json({ status: 'OK' })
}
