const http = require("http");
const fs = require("fs");
var currentDate = new Date();

http.createServer( (req, res) => {
    fs.appendFile("check.txt", currentDate.toISOString(), (err) => {
        if (err) throw err;
        console.log("Date Checked");
    });
    fs.readFile("check.txt", (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8000);