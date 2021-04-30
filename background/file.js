const fs = require("fs");

// const data = {
//   title: "test",
//   body: "tesssst",
// };

// const stringData = JSON.stringify(data);
// console.log(stringData);

// fs.writeFileSync("data.json", stringData);

const dataBuffer = fs.readFileSync("data.json");
const dataString = dataBuffer.toString();

myData = JSON.parse(dataString);

myData.name = "mohamed";
myData.from = "Mans";
myData.age = "26";

const stringData = JSON.stringify(myData);
fs.writeFileSync("data.json", stringData);
