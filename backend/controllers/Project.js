const Project = require('../models/Project')

const project=(req, res, next) => {
    

        let project =new Project ({
            projectname: req.body.projectname,
            user: req.body.user,
            role: req.body.role,
        })
        project.save()
        .then(project => {
            res.json({
                message: 'Project added successfully!'
                
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
    }

    


 module.exports={
     project
 }