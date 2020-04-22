const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Assignment</title></head>')
        res.write('<body><form action="create-user" method="POST"><input name="username" type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end()
    }

    if(url === '/users') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Assignment</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>')
        res.end()
    }

    if(url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            bodyl .push(chunk)
        })
        req.on('end', () => {
            const parsedBody = buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1])
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();

    }
});

server.listen(3000);