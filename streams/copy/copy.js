const fs = require("node:fs/promises");
(async () => {
  const copyFile = await fs.open("copied-file.txt", "w");
  const copyreadFile = await fs.readFile("../test.txt");
  await copyFile.write(copyreadFile);
})();
