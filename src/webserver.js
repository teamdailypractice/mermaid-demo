const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const DIST_DIR = path.join(process.cwd(), "dist");
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use(express.static(DIST_DIR));

app.use('/static', express.static(DIST_DIR));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
