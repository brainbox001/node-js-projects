// // **** Using promises API ***
// const fs = require("fs/promises");

// (async () => {
//   try {
//     await fs.copyFile("file.txt", "promise-file.txt");
//   } catch (error) {
//     console.log(error);
//   }
// })();

// // ***** Using Callback API ****
// const fs = require("fs");

// fs.copyFile("file.txt", "callback-file.txt", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// ***** Using synchronous API *****
const fs = require("fs");
fs.copyFileSync("file.txt", "sync-file.txt");
