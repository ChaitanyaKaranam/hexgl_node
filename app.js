const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'hexgl')));

app.listen(process.env.port || 5000, () => console.log(`App Started on port ${process.env.port || 5000}`));