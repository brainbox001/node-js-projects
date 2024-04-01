const { Buffer } = require("buffer");
const buff = Buffer.alloc(1e9);

setInterval(() => {
  for (let i = 0; i < buff.length; i++) {
    buff[i] = 0x64;
  }
  //   buff.fill(0x22) alternative to the for loop
  console.log(buff);
}, 5000);
