const express = require("express");
const gateway = require('fast-gateway');
const port = 8000;

const server = gateway({
    routes: [{
            prefix: '/order',
            target: 'http://localhost:8001/',
            hooks: {}
        },
        {
            prefix: '/pmt',
            target: 'http://localhost:8002/',
            hooks: {}
        },
    ]
})

server.get('/mytesting', (req, res) => {
    res.send('yes')
});
server.get('/', (req, res) => {
    res.send('Main module is ruuning')
});

server.start(port).then(server => {
    console.log(`api gateway suninng at ${port}`);
});