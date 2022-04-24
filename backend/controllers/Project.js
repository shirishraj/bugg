const Project = require('../models/Project')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')

const project=(req, res, next) => {
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

        let project =new Project ({
            project_name: req.body.project_name,
            user: req.body.user,
            email: req.body.email,
            password: hashedPass
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
    })

    
}

 module.exports={
     project
 }