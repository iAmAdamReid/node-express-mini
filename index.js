// implement your API here
// how to import / export code between files
// introduce how routing works=

const express = require('express');
const db = require('./data/db');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hello, FSW13!</h1>')
});

server.get('/api/users', (req, res) => {
    db.find()
    .then(users => {
        console.log(`\n users`, users);
        res.json(users)
    })
    .catch(error => res.send(error));
})

const port = 8000;
server.listen(port, () => {
    console.log(`\n API running on ${port} === \n`);
});