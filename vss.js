const http = require("http");
const fs = require("fs");

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000);

console.log('?вопросносамовопросносамовопросно?');

/*
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
});

server.listen(process.env.PORT || 3000);

console.log('?вопросносамовопросно?');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

const host = 'localhost';
const port = 8000;

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
});

server.listen(port, host);
console.log('?вопросносамовопросно?');



const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("?вопросносамовопросно?");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`?вопросносамовопросно? http://${host}:${port}`);
});

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
*/
