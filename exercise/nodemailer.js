// goto nodemailer
// npm i nodemailer
// find the email sending code
// smtp matching with google
// username and password()
// run the code
const nodemailer = require("nodemailer");
//create a transporter

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async ({ from, to, subject, text, html, attachments }) => {
  //setup message
  const message = {
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
    attachments: [...attachments],
  };
  const result = await transporter.sendMail(message);
  return result.messageId;
};
module.exports = { sendMail };
