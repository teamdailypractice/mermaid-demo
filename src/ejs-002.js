const ejs = require('ejs');

const templateString = `
<% if (user) { %>
    <h2><%= user.name %></h2>
<% } %>
`
let template = ejs.compile(templateString, {});
const data  = {"user": {
"name": "mani",
"age": 50

}};

console.log(template(data));
