const { sendMail } = require("./nodemailer");
const mailFunction = async () => {
  const result = await sendMail("Hello Keshab G");
  return result;
};

const getResult = async () => {
  const res = await mailFunction();
  console.log(res);
};

getResult();
