const fs = require('fs');
const path = require('path');

const { markdownToJson, getHtmlFilename, generateHtml, generateHtmlDiagrams } = require('./mermaidUtils')

const APP_HOME = process.cwd();
const MARKDOWN_DIR = path.join(APP_HOME, "markdown");
const SOURCE_DIR = path.join(APP_HOME, "src");
const TEMPLATE_DIR = path.join(APP_HOME, "src-template");
const DIST_DIR = path.join(APP_HOME, "dist");
const MERMAID_TEMPLATE_HTML_FILE = "mermaid.html.ejs";


const files = fs.readdirSync(MARKDOWN_DIR);

for (const filename of files) {

    if (path.extname(filename) === ".md") {

        const fileContent = fs.readFileSync(path.join(MARKDOWN_DIR, filename), "utf8");

        if (fileContent.indexOf("```mermaid") >= 0) {
            generateHtmlDiagrams(fileContent,
                path.join(TEMPLATE_DIR, MERMAID_TEMPLATE_HTML_FILE),
                path.join(DIST_DIR, getHtmlFilename(filename)));
        }
        else {
            console.log(`Does not contain mermaid diagram specification: ${filename}`)
        }
    } else {
        console.log(`Not a markdown file: ${filename}`)
    }
}

