//get
const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // 读取请求的数据
    });

    req.on('end', () => {
        // 请求结束后处理数据
        console.log({
            method: req.method,
            body: body,
            headers: req.headers
        });

        res.statusCode = 200;
        res.end('Received'); // 返回响应
    });
});

server.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080/');
});