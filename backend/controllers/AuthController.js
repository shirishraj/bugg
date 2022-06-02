const User = require('../models/User')
const bcrypt= require('bcrypt')

const register=(req, res, next) => {
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

        let user =new User ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            roles: req.body.roles,
        })

        user.save()
        .then(user => {
            res.json({
                message: 'User added successfully!',
                status:'ok'
            })
        })
        
        .catch(error => {
            res.json({
                message: 'An error occured!',
                status:'error '
            })
        })
    })  
}

 module.exports={
     register
 }