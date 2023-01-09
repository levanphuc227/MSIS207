const express = require('express');
const mongoose = require('mongoose')
const Cors = require('cors');
const Pusher = require('pusher');
const dotenv =require('dotenv');

const Posts =require('./postModel');
const { db } = require('./postModel');
dotenv.config()

const app=express()
const port = process.env.PORT||9000
const connection_url = 'mongodb+srv://video:lof9FZDfX1lEkLxI@cluster0.slj108v.mongodb.net/?retryWrites=true&w=majority'

const pusher = new Pusher({
    appId: "1524599",
    key: "cd0c8e539d5f0329fa94",
    secret: "27460947f57248240122",
    cluster: "ap1",
    useTLS: true,
  });

  
app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {

})

mongoose.connection.once('open',()=>{
    console.log("DB connected")
    const changeStream=mongoose.connection.collection('posts').watch()
    changeStream.on('change',change=>{
        if(change.operationType==='insert'){
            console.log('Trigerring Pusher')
            pusher.trigger('posts','inserted',{
                change:change
            })
        }else{
            console.log('error trigerring Pusher')
        }
    })
})
app.get('/',(req,res)=>res.status(200).send('this is the bug'))

app.post('/upload',(req,res)=>{
    const dbPost=req.body;
    Posts.create(dbPost,(err,data)=>{
        if(err)
            res.status(500).send(err);
        else    
        res.status(201).send(data);
    })
})
app.get('/sync',(req,res)=>{
    Posts.find((err,data)=>{
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(data);
    })
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });