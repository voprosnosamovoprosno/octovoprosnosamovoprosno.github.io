const http = require("http");

/*
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("?вопросносамовопросно?");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`?вопросносамовопросно? http://${host}:${port}`);
});
*/

const httpServer = http.createServer((req, res) => {
    console.log(`res: ${req.url}`);
    if(req.url === '/') {
        sendRes('index.html', 'text/html' , res);
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }
}).listen(3000, ()=>{
    console.log('?вопросносамовопросно? node.js port 3000 ui');
});

function sendRes(url, contentType, res) {
    let file = path.join(__dirname+'/static/', url); //В static хранятся наши css и js файлы
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
            res.end();
            console.log(`error 404 ${file}`);
        }
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(`res 200 ${file}`);
        }
    })
}

function getContentType(url) {
    switch (path.extname(url)){
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";
        default:
            return "application/octet-stream";
    }
}
