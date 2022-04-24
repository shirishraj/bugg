const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema= new Schema ({
    project_name:{
        type:String,
        required: true,
    },
    user:{
        type:String,
        ref: 'users'
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    }
},
    {timestamps: true}
)

const Project =mongoose.model('Project',projectSchema)
module.exports = Project