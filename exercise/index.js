require("dotenv").config();

const { sendMail } = require("./nodemailer");

console.log(process.env.EMAIL, process.env.PASSWORD);
const mailFunction = async (message) => {
  const result = await sendMail(message);
  return result;
};

const message = {
  from: "keshabsingh981829@gmail.com",
  to: "sutarkeshab123@gmail.com",
  subject: "nodemailer",
  text: "Namaste",
  html: '<h1>keshab</h1> Embedded image: <img src="cid:unique@nodemailer.com/">',

  attachments: [
    {
      // utf-8 string as an attachment
      filename: "text1.txt",
      content: "hello world!",
    },
    {
      path: "./my cover letter.pdf",
    },
    {
      filename: "image.jpg",
      path: "./keshabsutar.jpg",
      cid: "unique@nodemailer.com",
    },
  ],
};
mailFunction(message);

// const getResult = async (message) => {
//   const res = await mailFunction(message);
//   console.log(res);
// };

// getResult("hello keshab");
