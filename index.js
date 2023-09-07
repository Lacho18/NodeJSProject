let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    if(req.url === "/") {
        fs.writeFile("./newFile.txt", "This is a text written in a new file", (error) => {
            if(error) throw error;
            console.log("file saved");
        });
        res.end("Dobur den");
    }
    else if(req.url === "/about") {
        fs.readFile("./newFile.txt", "utf-8", (err, data) => {
            if(err) {
                console.log("no file found");
                return;
            }
            else {
                console.log("data");
                res.end(data);
            }
        });
    }
    else if(req.url === "/file.html") {
        try {
            const datas = fs.readFileSync("./file.html", 'utf-8');
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(data);
        } catch (err) {
            res.writeHead(404);
            res.end("You are inside the error section. That's bad :(."); 
        }
    }
    else if(req.url === "/test") {
        try {
            const datas = fs.readFileSync("./test.html", 'utf-8');
            fs.readFileSync("./Script.js", 'utf-8');
            fs.readFileSync("./Style.css", 'utf-8')
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(datas); 
        } catch (err) {
            res.writeHead(404);
            res.end("You are inside the error section. That's bad :(."); 
        }
    }
    else {
        res.writeHead(404);
        res.end("404 file not found!");
    }
});

server.listen(3000);
