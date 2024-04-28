const fs = require("node:fs/promises");

// (async () => {
//   console.time("stream");
//   const readFile = await fs.open("test1.txt", "r");
//   const writeFile = await fs.open("test-file.txt", "w");

//   let bytesRead = -1;
//   while (bytesRead !== 0) {
//     const readResult = await readFile.read();
//     bytesRead = readResult.bytesRead;
//     writeFile.write(readResult.buffer.subarray(0, bytesRead));

//     // if (bytesRead !== 16384) {
//     //   const indexOfNotFilled = readResult.buffer.indexOf(0);

//     //   const newBuffer = Buffer.alloc(indexOfNotFilled);

//     //   readResult.buffer.copy(newBuffer, 0, 0, indexOfNotFilled);
//     //   writeFile.write(newBuffer);
//     // } else {
//     //   writeFile.write(readResult.buffer);
//     // }
//   }
//   console.timeEnd("stream");
// })();

const fs = require("node:fs/promises");
const { pipeline } = require("node:stream");

(async () => {
  console.time("pipe");
  const srcFile = await fs.open("test1.txt", "r");
  const destFile = await fs.open("test1-file.txt", "w");
  const readStream = srcFile.createReadStream();
  const writeStream = destFile.createWriteStream();
  // readStream.pipe(writeStream);
  // readStream.on("end", () => {
  //   console.timeEnd("pipe");
  // });
  pipeline(readStream, writeStream, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.timeEnd("pipe");
      console.log("pipeline succedded");
    }
  });
})();
