const express = require('express');
port =process.env.PORT || 8000;
// connecting to db
const db = require('./config/mongoose');


const app = express();



app.get('/',function(req,res){
    return res.send('hello buddy')
})

app.listen(port,function(){
    console.log('server is running on port',port)
})