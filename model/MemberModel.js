const db = require("./collegedb")
const format = require('string-format')

var member = function()
{
    this.save = function(data,callback)
    {
        var qu = format("insert into member(name,mail,pass,type) value('{0}','{1}','{2}','{3}')",data.uname,data.email,data.pwd,data.type)
        db.query(qu,function(err)
        {
            if(err){
                console.log("SAve MEM :: " , err)
                callback(false)
            }else{
                callback(true)
            }
        })
    }

    this.fetchStudent = function(callback)
    {
        var qu = "select memberid,name,mail from member where type='student'";
        db.query(qu,function(err,data)
        {
            if(err){
                console.log("fetch stud :: " , err)
                callback(false)
            }else{
                callback(data)
            }
        })
    }

    this.fetchfaculty = function(callback)
    {
        var qu = "select memberid,name,mail from member where type='faculty'";
        db.query(qu,function(err,data)
        {
            if(err){
                console.log("fetch fac :: " , err)
                callback(false)
            }else{
                callback(data)
            }
        })
    }

    this.login = function(data,callback)
    {
        var qu = format("select * from member where mail='{0}' and pass='{1}'",data.mail,data.pass)
        //console.log(qu)
        db.query(qu,function(err,record)
        {
            if(err){
                callback(false)
            }else{
                callback(record)
            }
        })
    }
}


module.exports = new member()