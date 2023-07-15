import express from 'express';

const app = express();
const port = 3000;

//run npx tsc to compile typescript to javascript

app.get('/', (req, res) => {
    res.send('GET / ');
});

app.post('/', (req, res) => {
    res.send('POST / ');
});

app.listen(port, () => {
    return console.log('Express is listening at http://localhost:${port}');
});

//Maybe add [cassandra DB](https://cassandra.apache.org/_/index.html) to the app
// const hostname = '127.0.0.1';
// const port = 3000;



// //create routes for server to listen to
// const routes = require('../routes');

// //createServer takes a callback function
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
    
//     //loop through routes and check if the path and method match
//     for (let route of routes) {
//         if (route.path === req.url && route.method === req.method) {
//             return route.handler(req, res);
//         }

//     };
//     //if no route is found, return 404
//     res.statusCode = 404;
//     res.end('404 Not Found');
// });

// //listen takes a port and a hostname
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// }
// );

