const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('hello World!! SEO');
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('server start..');
})