const express = require('express');

const port = 4000;

const app = express();

app.use('/styles', express.static('dist/styles'));
app.use('/scripts', express.static('dist/scripts'));
app.use('/*', express.static('dist'));


app.listen(port, () => console.log(`Web server running on port ${port}!`))