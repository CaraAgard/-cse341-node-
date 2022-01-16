const path = require('path');

//const http = require('./http');
//const http = require('http');

const express = require('express');



const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
//const fs = require('fs');
//const routes = require('./routes');
const app = express();

//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'pug');
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const res = require('express/lib/response');

//app.use('/admin',adminRoutes);
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });
// app.use('/add-product',(req, res, next) => {
//    // console.log('In another middleware');
//    //res.send('<h1>The "Add Product" Page</h1>');
//    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// });

// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');

// });

// app.get('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');

// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');

// });

app.use('/',(req, res, next) => {
  //  console.log('In another middleware');
   res.send('<h1>Hello</h1>');
});
//const server = http.createServer(routes);
//console.log(routes.someText);
//const server = http.createServer(routes.handler);
//const server = http.createServer(app);
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

//server.listen(3000);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
// });

app.use((req, res, next) => {
    res.status(404, {pageTitle: 'Page not found'}).render('404');
});

app.listen(3000);