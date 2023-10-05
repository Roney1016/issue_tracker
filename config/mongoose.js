const mongoose = require('mongoose');

const url ='mongodb+srv://manishkumarravi1016:LJ4N1P0BX0CNjwJZ@cluster0.ahp1mkl.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to db'));


db.once('open',function(){
    console.log('successfully connected to DB');
})