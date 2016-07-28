var express = require("express"); 
var app = express();
var compliments = require("./compliments")
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","hbs")
app.get("/", compliments.complimentsAndBg)
app.post("/", compliments.addCompliment)
app.get("/:names", compliments.some)

app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})
