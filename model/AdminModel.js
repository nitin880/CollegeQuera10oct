const db = require("./collegedb")
const format = require('string-format')

var admin = function()
{
    this.adminlogin = function(data,callback)
    {
        var qu = format("select * from admin where mail='{0}' and password='{1}'",data.mail,data.pass)
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


module.exports = new admin()