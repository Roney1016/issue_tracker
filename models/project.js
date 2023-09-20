const mongoose = require('mongoose');



const projectSchema = new mongoose.Schema({
    name:{
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
    issue: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ]
},{timestamps:true});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;