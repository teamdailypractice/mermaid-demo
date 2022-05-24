const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const APP_HOME = process.cwd();
const MARKDOWN_DIR = path.join(APP_HOME, "markdown");
const SOURCE_DIR = path.join(APP_HOME, "src");
const TEMPLATE_DIR = path.join(APP_HOME, "src-template");
const DIST_DIR = path.join(APP_HOME, "dist");
const MERMAID_TEMPLATE_HTML_FILE = "mermaid.html.ejs";

const files = fs.readdirSync(MARKDOWN_DIR)

for (const filename of files) {
    if (path.extname(filename) === ".md") {
        console.log(filename);
        const fileContent = fs.readFileSync(path.join(MARKDOWN_DIR, filename), "utf8");
        const lines = fileContent.split("\n")
            .filter(line => line.trim().length > 0)
            .map(line => line.trim());
        const codeStart = lines.indexOf("```mermaid") + 1;
        const codeEnd = lines.indexOf("```") - 1;
        const heading = lines[0].replace("#", "").trim();
        const description = lines.slice(1, codeStart - 1)
        console.log(heading);
        console.log(description);
        console.log(lines.slice(codeStart, codeEnd + 1));


        
        const OUTPUT_FILE = filename.replace(".md", "") + ".html";

        console.log(OUTPUT_FILE);

        ejs.renderFile(path.join(TEMPLATE_DIR, MERMAID_TEMPLATE_HTML_FILE), { title: heading, markdown: lines.slice(codeStart, codeEnd + 1) }, {}, function (error, result) {
            // str => Rendered HTML string
            // console.log(result);
            const outputFilepath = path.join(DIST_DIR, OUTPUT_FILE);
            fs.writeFileSync(outputFilepath, result, "utf8");
            console.log(`${outputFilepath} - generated!`);
        });
    }



}

