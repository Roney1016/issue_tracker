const mongoose = require('mongoose');

const url ='mongodb://127.0.0.1:27017/issueTracker'
mongoose.connect(url);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to db'));


db.once('open',function(){
    console.log('successfully connected to DB');
})