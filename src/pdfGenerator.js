const fs = require('fs');
const puppeteer = require('puppeteer');

const path = require('path');

const HTML_DIRECTORY = path.join(process.cwd(), "dist");
const PDF_DIRECTORY = path.join(process.cwd(), "pdf");
const BASE_URL = 'http://localhost:3000/static/'


const getPdfOptions = (filepath, format) => {
    return {
        path: filepath,
        format: format
    };
}

async function generatePdf(url, pdfOptions) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.addStyleTag({ content: '.nav { display: none} .navbar { border: 0px} #print-button {display: none}' });

    await page.goto(url, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf(pdfOptions);
    await browser.close();
}

const htmlFiles = fs.readdirSync(HTML_DIRECTORY)
    .filter(filename => path.extname(filename) === ".html");

htmlFiles.forEach(file => {
    console.log(`pdf generation started: ${file}`);
    const pdfFilename = file.replace(".html", ".pdf");
    const pdfFilepath = path.join(PDF_DIRECTORY, pdfFilename);
    const pageUrl = `${BASE_URL}${file}`;
    generatePdf(pageUrl, getPdfOptions(pdfFilepath, "A4"));
    console.log(`pdf generation completed: ${pdfFilepath}`);
});