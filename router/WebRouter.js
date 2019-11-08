const express = require("express")
const route = express.Router()
const adminModel = require("../model/AdminModel")
const memberModel = require("../model/MemberModel")

route.get("/admin",function(req,res)
{
    console.log(">>> " + req.session)
    var msg = ""
    var err = req.query.err
    console.log(err)

    if(err!=undefined && err=="1")
    {
        msg = "ID or Password Wrong !"
    }

    res.render("login",{errormsg:msg})
})

route.post("/adminlogin",function(req,res)
{
    console.log(req.body)
    adminModel.adminlogin(req.body,function(record)
    {
        if(record!=false && record.length==1)
        {
            data = record[0]
            req.session.user = data
            res.redirect("/admin/home")
        }else
        {
            res.redirect("/universal/admin?err=1")
        }
    })
})

route.get("/user",function(req,res)
{
    var msg = ""
    var err = req.query.err
    console.log(err)

    if(err!=undefined && err=="1")
    {
        msg = "ID or Password Wrong !"
    }

    res.render("userlogin",{errormsg:msg})
})

route.post("/memberlogin",function(req,res)
{
    console.log(req.body)
    memberModel.login(req.body,function(record)
    {
        if(record!=false && record.length==1)
        {
            user_data = record[0]            
            req.session.user = user_data
            console.log(req.session.user)
            if(user_data.type=="student")
            {
                res.redirect("/student/home")
            }else{
                res.redirect("/faculty/home")
            }            
        }else
        {
            res.redirect("/universal/user?err=1")
        }
    })
})

// route.get("/contact",function(req,res)
// {
    
// })


module.exports = route