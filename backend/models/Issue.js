const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: [true, "Please add project name"],
    trim: true,
  },
  status: {
    type: String,
    //required: [true, "Please add issue description"],
    trim: true,
  },
  description: {
    type: String,
    //required: [true, "Please add issue description"],
    trim: true,
  },
  priority: {
    type: String,
    //required: [true, "Please add issue priority"],
    trim: true,
  },
  // assignedTo: {
  //   type: String,
  //  // required: [true, "Please add assigned to name"],
  //   trim: true,
  // },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Issue", IssueSchema);
