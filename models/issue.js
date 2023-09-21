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
    labels: [
        {
          type: String,
          trim: true,
          required: true,
        },
      ],
    
},{timestamps:true});

const Issue = mongoose.model('Issue',issueSchema);

module.exports = Issue;