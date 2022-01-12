//const http = require('./http');
const http = require('http');
//const fs = require('fs');
const routes = require('./routes');

//const server = http.createServer(routes);
console.log(routes.someText);
const server = http.createServer(routes.handler);
// function rqListener(req, res) {

// }  
// http.createServer(rqListener);

// http.createServer(function(req, res) {

// });

// http.createServer((req, res) => {
//     console.log(req);

// });

// const server = http.createServer((req, res) => {
//     console.log(req);
//     //process.exit():

// });
// server.listen(3000);

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     //process.exit():

// });
// server.listen(3000);

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     //process.exit():
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });
// server.listen(3000);

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     //process.exit():
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });
// server.listen(3000);

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form> action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     }
//     //process.exit():
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form> action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     }
//     //process.exit():
//     if (url === '/message' && method === 'POST'){
//         fs.writeFileSync('message.txt', 'DUMMY');
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form> action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     }
//     //process.exit():
//     if (url === '/message' && method === 'POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//            // console.log(parseBody);
//            const message = parseBody.split('=')[1];
//            fs.writeFileSync('message.txt', message);

//         });
        
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });

//async 
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form> action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     }
//     //process.exit():
//     if (url === '/message' && method === 'POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//            // console.log(parseBody);
//            const message = parseBody.split('=')[1];
//            fs.writeFileSync('message.txt', message);
//            res.statusCode = 302;
//            res.setHeader('Location', '/');
//            return res.end();

//         });
        
       
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// const server = http.createServer((req, res) => {
    
// });

server.listen(3000);