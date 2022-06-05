const ErrorResponse = require("../utils/errorResponse");
const Project = require('../models/Project');
const asyncHandler = require("../middlewares/async");


const getProjects = asyncHandler(async (req, res, next) => {
    const project = await Project.find();
    if (!project) {
      return next(new ErrorResponse("No data", 404));
    }
    res.status(200).json({
      success: true,
      data: project,
    });
  });

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

    


 module.exports={project, getProjects}