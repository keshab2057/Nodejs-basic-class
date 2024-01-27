const { convertMoney } = require("./index");
const money = async () => {
  const result = await convertMoney("USD", "NPR", 1000);
  console.log({ result });
};
money();
