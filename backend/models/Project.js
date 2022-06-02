const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema= new Schema ({
    projectname:{
        type:String,
        required: true,
    },
    user:{
        type:String,
        // ref: 'users',
        required:true,
    },
    role:{
        type:String,
        required:true
    },
},
    {timestamps: true}
)

const Project =mongoose.model('Project',projectSchema)
module.exports = Project