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
    user: "keshabsingh981829@gmail.com",
    pass: "jnizbssyqneawifg",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (html) => {
  //setup message
  const message = {
    from: '"Fred Foo 👻" <keshabsingh981829@gmail.com>', // sender address
    to: "sutarkeshab123@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html, // html body
  };
  const result = await transporter.sendMail(message);
  return result.messageId;
};
module.exports = { sendMail };
