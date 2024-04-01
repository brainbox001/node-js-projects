const { Buffer } = require("buffer");
const buff = Buffer.alloc(1000, 0xff);
const unsafeBuff = Buffer.allocUnsafe(5000);
for (let i = 0; i < unsafeBuff.length; i++) {
  unsafeBuff[i] !== 0
    ? console.log(`Buffer ${i} filled`)
    : console.log("Buffer not filled");
}
console.log(Buffer.poolSize);
