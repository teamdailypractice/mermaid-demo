const fs = require('fs');
const ejs = require('ejs');

function markdownToJson(fileContent) {
    const lines = fileContent.split("\n")
        .filter(line => line.trim().length > 0)
        .map(line => line.trim());
    const codeStart = lines.indexOf("```mermaid") + 1;
    const codeEnd = lines.indexOf("```") - 1;
    const heading = lines[0].replace("#", "").trim();
    const description = lines.slice(1, codeStart - 1)
    return {
        title: heading,
        markdown: lines.slice(codeStart, codeEnd + 1),

    }

}

function getHtmlFilename(markdownFilename) {

    return markdownFilename.toLowerCase().replace(".md", ".html");
}

function generateHtml(templateFilepath, data) {
    ejs.renderFile(templateFilepath, data, {}, function (error, result) {
        fs.writeFileSync(data.outputFilepath, result, "utf8");
        console.log(`${data.outputFilepath} - generated!`);
    });

}
function generateHtmlDiagrams(fileContent, templateFilepath, outputFilepath) {
    const mermaidSpec = markdownToJson(fileContent);
    const data = {
        ...mermaidSpec,
        "outputFilepath": outputFilepath
    };
    generateHtml(templateFilepath, data);
}

module.exports = {
    markdownToJson,
    getHtmlFilename,
    generateHtml,
    generateHtmlDiagrams
}