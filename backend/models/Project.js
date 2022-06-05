const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema= new Schema ({
    projectname:{
        type:String,
        required: true,
    },
    user:{
        type:String,
        // ref: 'name',
        required:true,
    },
    role:{
        type:String,
        required:true
    },
},
    {timestamps: true}
)

module.exports  =mongoose.model('Project',projectSchema)
