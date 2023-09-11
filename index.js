const http = require("http");
const fs = require("fs");

console.log(fs.readFileSync("./sample.txt", "utf-8"));

// const ans = http.createServer((req, res, next) => {
// 	req();
// });
