const express = require('express');
const shortid = require('shortid');

const server = express();

let user = [];

server.use(express.json());

server.post('/api/users', (req, res) =>{
   const userInfo =  req.body;

    userInfo.id = shortid.generate();
    user.push(userInfo);
try {
    res.status(201).json(userInfo)
} catch (err){
    res.status(400).json({message: "errorMessage:", err});
}
});

server.get('/api/users', (req, res) => {

    try {
       res.json(user); 
    } catch (err){
        res.status(500).json({message:"errorMessage: ", err})
    }
    
});

server.get('/api/users/:id', (req, res) => {
    
    try {
        res.json(user);
    } catch (err){
        res.status(404).json({message:"errorMessage:", err})
    }
    
    });

    server.put('/api/users/:id', (req, res) => {
      const {id} = req.params;
      const changes = req.body;
        changes.id = id;
        try {
                 let index = user.findIndex(usr => usr.id === id);
    if (index !== -1){
            hubs[index] = changes;
            res.status(200).json(user[index]);
        } else {
            res.status(404).json({message: 'user id is not found'})
        }
        } catch (err){
            res.status(500).json({message: "errorMessage:", err})
        }
      
        });

        server.delete('/api/users/:id', (req, res) => {
            const {id} = req.params;
       
            const deleted = user.find(usr => usr.id === id);
          
            try {
                if (deleted) {
                    user = user.filter(usr => usr.id !== id);
                    res.status(200).json(deleted);
                } else {
                    res.status(404).json({message: 'user not found'});
                }
            } catch(err){
                res.status(500).json({message: "errorMessage:", err})
            }
           
            });

const PORT = 5000;
server.listen(PORT, () => {
    console.log('listening on localhost:', PORT);
});