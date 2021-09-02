var express = require("express");
var routerModule = require("./exp_demo3a.js");

var app = express();

//both exp-demo3a.js and exp-demo3b.js are in same directory

app.use("/routedemo", routerModule);

app.listen(3000)



