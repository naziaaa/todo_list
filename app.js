const ex = require("express");
const bodyParser = require("body-parser");


const app = ex();

let items=["Buy Food", "Cook Food","Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(ex.static("public"))



app.get("/", function (req, res) {
  let today = new Date();
  let curDay = today.getDay();
  let day = "";

  options={
  weekday: "long",
  day:"numeric",
  month:"long"
 }
 
 day=today.toLocaleDateString("en-US",options);

  res.render("list", { kindOfDay: day,newTasks:items});
});

app.post("/",function(req,res){
 let item=req.body.task;
 items.push(item)
 res.redirect("/")
})

app.listen(process.env.PORT || 3000, function () {
  console.log("server started");
});
