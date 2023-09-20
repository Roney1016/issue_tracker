const mongoose = require('mongoose');


const issueSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Author:{
        type: String,
        required: true
    },
    label: {
            type: String,
           required:true
        }
    
},{timestamps:true});

const Issuse = mongoose.model('Issue',issueSchema);

module.exports = Issuse;