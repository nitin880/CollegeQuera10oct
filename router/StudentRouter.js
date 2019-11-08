const express = require("express")
const route = express.Router()

const qusModel = require("../model/QusAnsModel")

route.get("/home",function(req,res)
{
    console.log(req.session.user)
    name = req.session.user.name

    res.render("student/home",{name:name})
})

route.get("/ask",function(req,res)
{
    var id = req.session.user.memberid
    qusModel.getqus(id,function(result)
    {     
        res.render("student/ask",{qus:result})
    });    
})

route.post("/savequs",function(req,res)
{
    var id = req.session.user.memberid
    qusModel.savequs(req.body,id,function(result)
    {     
        res.redirect("/student/ask")
    });
})

module.exports = route