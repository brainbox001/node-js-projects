// const fs = require("fs/promises");

// (async () => {
//   console.time("writeMany");
//   const file = await fs.open("test.txt", "w");
//   for (let i = 0; i < 1000000; i++) {
//     await file.writeFile(`${i} \n`);
//   }
//   file.close();
//   console.timeEnd("writeMany");
// })();

// const fs = require("node:fs");
// (async () => {
//   console.time("writeMany");
//   fs.open("test.txt", "w", (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//       fs.write(fd, `${i}\n`, () => {});
//     }
//     console.timeEnd("writeMany");
//   });
// })();

// #### Using streams ########

const fs = require("node:fs/promises");

(async () => {
  console.time("writeMany");
  const file = await fs.open("test.txt", "w");
  const stream = file.createWriteStream();
  for (let i = 0; i < 1000000; i++) {
    const buff = Buffer.from(`${i + 1}`, "utf8");
    stream.write(`${buff}\n`);
  }
  file.close();
  console.timeEnd("writeMany");
})();
