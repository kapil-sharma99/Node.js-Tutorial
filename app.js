// ......Routing requests......

// const http = require('http');

// const server = http.createServer((
// 	req, res) => {
// 	const url = req.url;
// 	if(url === '/') {
// 		res.write('<html>');
// 		res.write('<head><title>Enter Message</title><head>');
// 		res.write('<body><form action="/message" method="POST"><input name"message" type="text"><button type="submit">Send</button></form></body>');
// 		res.write('</html>');
// 		return res.end();
// 	}
// 	res.setHeader('Content-Type', 'text/html');
// 	res.write('<html>');
// 	res.write('<head><title>My Family Page</title><head>');
// 	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// 	res.write('</html>');
// 	res.end();
// 	}); // req will keep the request and res will keep the responds //


// server.listen(3000);

// ......Redirecting requests....

// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((
// 	req, res) => {
// 	const url = req.url;
// 	const method = req.method;
// 	if(url === '/') {
// 		res.write('<html>');
// 		res.write('<head><title>Enter Message</title><head>');
// 		res.write('<body><form action="/message" method="POST"><input name"message" type="text"><button type="submit">Send</button></form></body>');
// 		res.write('</html>');
// 		return res.end();
// 	}
// 	if(url === '/message' && method === 'POST') {
// 		fs.writeFileSync('message.txt', 'DUMMY')
// 		res.statusCode = 302;
// 		res.setHeader('Location', '/');
// 		return res.end();	
// 	}

// 	res.setHeader('Content-Type', 'text/html');
// 	res.write('<html>');
// 	res.write('<head><title>My Family Page</title><head>');
// 	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// 	res.write('</html>');
// 	res.end();
// 	}); 

// 	server.listen(3000);

// .....Parsing Data.....
// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((
// 	req, res) => {
// 	const url = req.url;
// 	const method = req.method;
// 	if (url === '/') {
// 		res.write('<html>');
// 		res.write('<head><title>Enter Message</title><head>');
// 		res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
// 		res.write('</html>');
// 		return res.end();
// 	}
// 	if (url === '/message' && method === 'POST') {
// 		const body = [];
// 		req.on('data', (chunk) => {
// 			console.log(chunk)
// 			body.push(chunk);
// 		}); //  data event is fired whenever a new data is ready to be read
// 		req.on('end', () => {
// 			const parsedBody = Buffer.concat(body).toString(); // here the message sent by the webpage will be convrted into string and got printed
// 			const message = parsedBody.split('=')[1]; // here the converted string is splited and the first element is got printed
// 			fs.writeFile('message.txt', message, (err) => {   // this function will handel the errors 
// 				res.statusCode = 302; 
// 				res.setHeader('Location', '/');
// 				return res.end();
// 			});// here the message sent by the webpage is already converted into string because of previous code, that message will be printed in new text file
// 		})
// 	}

// 	res.setHeader('Content-Type', 'text/html');
// 	res.write('<html>');
// 	res.write('<head><title>My Family Page</title><head>');
// 	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// 	res.write('</html>');
// 	res.end();
// });

// server.listen(3000);

// ......using the node module system.....
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);

