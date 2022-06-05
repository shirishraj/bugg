const User = require('../models/User')
const asyncHandler = require("../middlewares/async");
const bcrypt= require('bcrypt')

const getUsers = asyncHandler(async (req, res, next) => {
    const user = await User.find();
    if (!user) {
      return next(new ErrorResponse("No data", 404));
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  });

  const getCount = asyncHandler(async (req, res, next) => {
    const user = await User.find().count();
    if (!user) {
      return next(new ErrorResponse("No data", 404));
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  });

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
     register, getUsers, getCount
 }