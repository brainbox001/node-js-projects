const { Buffer } = require("buffer");
const memoryContainer = Buffer.alloc(4);
memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x00;
memoryContainer[2] = 0x34;
memoryContainer[3] = 0xff;
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);
console.log(memoryContainer);
console.log(memoryContainer.toString("binary"));
