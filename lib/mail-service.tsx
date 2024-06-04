import nodemailer, { SentMessageInfo } from 'nodemailer';

export async function sendMail(subject: string, toEmail: string, emailText: string, senderName: string = "Yash @ Snapy"): Promise<SentMessageInfo> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: `${senderName} <${process.env.NODEMAILER_EMAIL}>`,
    to: toEmail,
    subject: subject,
    text: emailText,
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: Error | null, response: SentMessageInfo) => {
      if (err) {
        console.error('Error sending email:', err);
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
