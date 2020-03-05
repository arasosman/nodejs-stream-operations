const express = require('express')
const app = express()
const port = 3500
const fs = require("fs");

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

app.get('/*', (req, res) => proxy.web(req, res, { target: 'http://localhost' }))

app.put('/', (req, res) => {
    console.log('osman')
    var writeStream = fs.createWriteStream('./output.txt');
    req.pipe(writeStream)
    req.on('end', () => {
        console.log('end')
        res.send('success')
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))