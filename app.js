const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
    console
    res.send('Hi! Reverse Proxy');
});

app.listen(4000, () => console.log('Server running on 4000'));