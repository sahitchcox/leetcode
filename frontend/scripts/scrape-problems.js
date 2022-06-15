const { readdir, writeFile } = require('fs/promises');

const template = `
const problems = [
{{problems}}];

export default problems;
`

readdir("./public/data/")
  .then((filenames) => {
    let problems = '';
    for (const filename of filenames) {
      problems += `  '${filename}',\n`
    }
    const output = template.replace('{{problems}}', problems);
    return writeFile('./src/problems.ts', output);
  })

