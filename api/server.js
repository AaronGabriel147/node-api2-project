// implement your server here
// require your posts router and connect it here


// const express = require('express'); // import the express package
// const server = express(); // creates the server
// server.use(express.json());

// server.use('/', (req, res) => {
//     res.send('Hello from Express');
// });


// module.exports = server;


// ________________________________________________________



const express = require('express');
const postsRouter = require('./posts/posts-router'); // import the posts router
const server = express(); // creates the server

server.use(express.json()); // 

server.use('/api/posts', postsRouter); // connect the posts router to the server

server.use('*', (req, res) => { // this is a middleware
    res.status(404).json({
        message: 'not found'
    });
});

module.exports = server;