const fs = require('fs');
const ejs = require('ejs');

// const data = {"users": ["mani", "kandhan"]};

const data = [
    {
        "name": "kandan",
        "age": 50

    },
    {
        "name": "mani",
        "age": 60

    }
];



// const data = {
//     "users": [
//         {
//             "name": "mani",
//             "age": 50
//         },
//         {
//             "name": "kandan",
//             "age": 60
//         },
//     ]
// };

const INPUT_FILE = "input-004.html.ejs";
const OUTPUT_FILE = "output-004.html";

console.log(data);

ejs.renderFile(INPUT_FILE, {users: data}, {}, function (error, result) {
    // str => Rendered HTML string
    console.log(result);
    fs.writeFileSync(OUTPUT_FILE, result, "utf8");
    console.log(`${OUTPUT_FILE} - generated!`);
});
