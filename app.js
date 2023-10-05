require('dotenv').config()
const express = require('express');
port =process.env.PORT || 8000;
// connecting to db
const db = require('./config/mongoose');
const app = express();
//body parser
app.use(express.urlencoded({extended:true}));

// use express layout
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts);
// extact script on sub file 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// add static files
app.use(express.static('./assets'))
//set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routes/index.js'))
// app.get('/',function(req,res){
//     return res.send('hello buddy')
// })

app.listen(port,function(){
    console.log('server is running on port',port)
})