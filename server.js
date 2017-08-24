// content of index.js
const http = require('http')
const port = 3000

const requestHandler = function (request, response) {
    console.log(request.url)
    // response.end('Hello Node.js Server!')
    response.sendFile('index.html', { root: "/" });
};

const server = http.createServer(requestHandler)

server.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})