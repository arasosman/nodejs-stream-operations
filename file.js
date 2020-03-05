const fs = require("fs");
const express = require("express")
const app = express();
const request = require('request');


app.get('/download', (req, res) => {
    var readStream = fs.createReadStream('./stream.txt');
    res.download("./stream.txt", "dsd.dd", {})
});

app.get('/send', (req, res) => {
    var readStream = fs.createReadStream('./stream.txt');
    readStream.pipe(request.put('http://localhost:3500'))
})

app.get('/', function (req, res) {

    request.get("http://localhost:3300/download").pipe(res);
});

app.listen(3300);