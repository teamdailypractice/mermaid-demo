const fs = require('fs');
const path = require('path');
const ejs = require('ejs');


const APP_HOME = process.cwd();
const MARKDOWN_DIR = path.join(APP_HOME, "markdown");
const SOURCE_DIR = path.join(APP_HOME, "src");
const DIST_DIR = path.join(APP_HOME, "dist");

const files = fs.readdirSync(MARKDOWN_DIR)

for (const file of files) {

  console.log(path.basename(file));
  console.log(path.extname(file));
}
