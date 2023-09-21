const Project = require('../models/project');
const Issue = require('../models/issue');
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

module.exports.projectDetails = async function(req,res){
   try{
    const project = await Project.findById(req.params.id).populate({
      path: 'issues',
    });
    
    // project.populate({path:'issue'})
    return res.render('project_detail',{title:'project details',project})
   }catch(error){
    console.log(error)
    return res.status(500).send('Internal server Error')
   }
}

module.exports.createIssue =async function(req,res){
   try{
    let project = await Project.findById(req.params.id);
    if(project){
    let issue= await Issue.create({
         title:req.body.title,
         Description:req.body.Description,
         Author:req.body.Author,
         labels:req.body.labels
      });

      project.issues.push(issue);
      project.save()
     
      return res.redirect('back')
    }

   }catch(error){
      console.log(error)
    return res.status(500).send('Internal server Error')
   }
}