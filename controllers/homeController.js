const Project = require('../models/project')
module.exports.home = async function(req,res){
    let project = await Project.find({});
    return res.render('home',{title:'home page',projects:project})
}