const express = require('express')
const path = require("path")
const bodyParser = require("body-parser")
const session = require('express-session')
const cookieParser = require('cookie-parser');
const webRoute = require("./router/WebRouter")
const adminRoute = require("./router/AdminRouter")
const studRoute = require("./router/StudentRouter")
const facRoute = require("./router/FacultyRouter")

const app = express()

app.use(express.static(path.join(__dirname,"assets")))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use("/universal",webRoute)
app.use("/admin",adminRoute)
app.use("/student",studRoute)
app.use("/faculty",facRoute)

app.get("",function(req,res)
{
    res.render("home")
})

app.listen(9090,function()
{
    console.log("CollegeQuera : http://localhost:9090")
})