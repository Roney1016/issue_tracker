const express = require('express');
port =process.env.PORT || 8000;



const app = express();



app.get('/',function(req,res){
    return res.send('hello buddy')
})

app.listen(port,function(){
    console.log('server is running on port',port)
})