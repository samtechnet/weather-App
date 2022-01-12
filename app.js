// const express = require('express');
// const bodyparser = require('body-parser');

// const app = express();


// const server
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', '/');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }

    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')

    res.write('</html');
    res.end();
});

server.listen(3000);