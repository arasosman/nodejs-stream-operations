var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // This opens up the writeable stream to `output`
  var writeStream = fs.createWriteStream('./output.txt');

    writeStream.writeStream(req)
}).listen(3500);