const fs = require('fs');
const ejs = require('ejs');


const data = {
    "user": {
        "name": "kandan",
        "age": 50

    }
};

const INPUT_FILE = "input-003.html.ejs";
const OUTPUT_FILE = "output-003.html";

ejs.renderFile(INPUT_FILE, data, {}, function (error, result) {
    // str => Rendered HTML string

    fs.writeFileSync(OUTPUT_FILE, result, "utf8");
    console.log(`${OUTPUT_FILE} - generated!`);
});
