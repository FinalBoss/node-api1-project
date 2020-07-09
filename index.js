const express = require('express');
const shortid = require('shortid');

const server = express();

let user = [];

server.use(express.json());

server.post('/api/users', (req, res) =>{
   const userInfo =  req.body;

    userInfo.id = shortid.generate();
    user.push(userInfo);

    res.status(201).json(userInfo)

})

server.get('/api/users', (req, res) => {
res.json(users);
});

server.get('/api/users/:id', (req, res) => {
    res.json(users);
    });

const PORT = 5000;
server.listen(PORT, () => {
    console.log('listening on localhost:', PORT);
});