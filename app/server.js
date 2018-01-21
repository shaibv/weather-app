var connect = require('connect');
var serveStatic = require('serve-static');
var fs = require("fs");

connect().use(serveStatic(__dirname)).listen(9000, function(){
    console.log('Server running on 9000...');
    fs.readFile("index.html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
});