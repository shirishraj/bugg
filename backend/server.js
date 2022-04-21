const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cors = require("cors");

const AuthRoute =require('./routes/auth');



//loading env variables
dotenv.config({ path: "./config/config.env" });

//connecting database
connectDB();

//route files
const issue = require("./routes/issue");

const app = express();
app.use(cors());
app.use(bodyparser.json());
//for logging
app.use(morgan("dev"));
//for error response
app.use(errorHandler);
//mount routers
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


app.use('/api',AuthRoute)