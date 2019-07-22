const http = require('http');

const router = require('./src/router.js');

const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});
