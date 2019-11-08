const express = require("express")
const route = express.Router()

const qusModel = require("../model/QusAnsModel")

route.get("/home",function(req,res)
{
    console.log(req.session.user)
    console.log(req.session.user)
    name = req.session.user.name

    res.render("faculty/home",{name:name})
})

route.get("/viewqus",function(req,res)
{
    qusModel.facqus(function(record)
    {
        res.render("faculty/qus",{qus:record})
    });    
})

module.exports = route