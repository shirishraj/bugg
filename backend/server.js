const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cors = require("cors");
const bcrypt= require('bcrypt')
const jwt =require('jsonwebtoken')
const AuthRoute =require('./routes/auth');
const IssueRoute =require('./routes/issue');
const ProjectRoute =require('./routes/project');

//loading env variables
dotenv.config({ path: "./config/config.env" });

//connecting database
connectDB();

//route files
const issue = require("./routes/issue");
const project = require("./routes/project");
const User = require("./models/User");


const app = express();
app.use(cors());
app.use(bodyparser.json());
//for logging
app.use(morgan("dev"));
//for error response
app.use(errorHandler);
//mount routers
app.use("/api/project", project);
app.use("/api/issue", issue);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server is running in PORT ${PORT}`)
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(() => process.exit(1));
});

//returns appropriate role
app.post('/api/verify', async(req, res) => {
  let token = req.headers.authorization;

  if (token == "") {
    return res.json({status: '401', roles: 'None'});
  }
  //console.log("टोकन ", req.headers.authorization);
  decoded = jwt.verify(token,  "I'm am the key~~@-@~~E."); //username and iat
  var name = decoded.username;

  User.findOne({name}).then(function(user){
    return res.json({status: '200', id: user.id, name: user.name, roles: user.roles})
  });
})

app.post('/api/login',async(req,res)=>{
    const {name,password} =req.body
    JWT_SECRET = "I'm am the key~~@-@~~E."

    const user = await User.findOne({
      name
    }).lean()

    

    if (!user){

      return res.json({status:'500', error: 'Invalid username or password'})
    }

    if (await bcrypt.compare(password, user.password)){
      // return res.json({status:'ok',data:''})
      const token = jwt.sign({ userid: user.id, username: user.name}, JWT_SECRET)
      return res.status(200).header('auth-token', token).send({token, role: user.roles, status: 'ok'})
    }
     
    res.json({status:'501', error: 'Invalid username/ password!'})
  }
)
app.use('/api',AuthRoute)
app.use('/api',IssueRoute)
app.use('/api',ProjectRoute)
