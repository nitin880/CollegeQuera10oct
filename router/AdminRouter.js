const express = require("express")
const route = express.Router()
const adminModel = require("../model/AdminModel")
const memberModel = require("../model/MemberModel")

route.get("/home",function(req,res)
{
    res.render("admin/adminhome")
})

route.get("/faculty",function(req,res)
{
    memberModel.fetchfaculty(function(result)
    {
        res.render("admin/adminfaculty",{faculty:result})
    })    
})

route.get("/student",function(req,res)
{
    memberModel.fetchStudent(function(result)
    {
        res.render("admin/adminstudent",{student:result})
    })    
})

route.all("/add",function(req,res)
{
    if (req.method=="GET")
        res.render("admin/adminaddmember")
    else
    {
        console.log(req.body)
        memberModel.save(req.body,function(result)
        {
            console.log(result)
            res.redirect("/admin/add")
        })
    }        
})

route.get("/logout",function(req,res)
{
    delete req.session.user
    res.redirect("/")
})



module.exports = route