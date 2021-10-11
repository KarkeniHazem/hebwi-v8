console.clear();
const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();
//connect DB
connectDB();
//routes
app.use(express.json());
app.use("/user", require("./routes/Auth"));
app.use("/player", require("./routes/player"));
app.use("/team",require("./routes/Team"))

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running `)
);
