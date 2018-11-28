// import your node modules
const express = require('express');

const db = require('./data/db.js');

const server = express();
const PORT = 4000;
// add your server code starting here

server.get('/api/posts', (req, res) =>{
   db.find()
   .then((post)=>{
       res.json(post)
   })
   .catch(err =>{
       res.status(500)
            .json({error: "The posts information could not be retrieved."})
   })
});

server.get('/api/posts/:id', (req, res)=>{
    const id = req.params.id;
    db.findById(id)
    .then(post =>{
        if(post) {
            res.json(post)
        }else {
            res.status(404)
            .json({message: "The post with the specified ID does not exist."})
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: "The post with the specified ID does not exist."})
    })
})




server.listen(PORT, ()=>{
    console.log(`Server works you did not break it, it's on port ${PORT}!`)
})
