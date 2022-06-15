const { mkdir, writeFile } = require('fs/promises');

const problemName = process.argv[2];
const dir = `public/data/${problemName}`;

mkdir(dir)
  .then(() => writeFile(`${dir}/problem.md`, ''))
  .then(() => writeFile(`${dir}/solution.js`, ''))