const fs = require("node:fs/promises");

(async () => {
  console.time("writeMany");
  const file = await fs.open("test.txt", "w");
  const stream = file.createWriteStream();

  //   const buff = Buffer.alloc(16384, "a");
  //   stream.write(`${buff}\n`);
  //   stream.on("drain", () => {
  //     console.log(stream.writableLength);
  //   });
  let i = 0;

  const writMany = () => {
    while (i < 40000000) {
      const buff = Buffer.from(`${i + 1}\n`, "utf8");

      i++;
      if (i === 39999999) {
        return stream.end(buff);
      }
      if (!stream.write(buff)) break;
    }
  };
  writMany();
  stream.on("drain", () => {
    writMany();
  });

  stream.on("finish", () => {
    console.timeEnd("writeMany");
    file.close();
  });
})();
