const Project = require('../models/project');

module.exports.projectForm = function(req,res){
    return res.render('project_form',{title:'Project form'})
}
// create new project
module.exports.create = async function(req,res){
   try{
    console.log(req.body)
    await Project.create(req.body);

    return res.redirect('/')
   }catch(error){
    console.log(error)
    return res.status(500).send('Internal server Error')
   }
}