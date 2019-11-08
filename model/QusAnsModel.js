const db = require("./collegedb")
const format = require('string-format')

var qusans = function()
{
    this.savequs = function(data,id,callback)
    {
        var qu = format("insert into question(qus,student) value('{0}',{1})",data.qus,id)
        db.query(qu,function(err)
        {
            if(err)
            {
                console.log("QUS errrororo : " , err)
                callback(false)
            }
            else
                callback(true)                
        });
    }

    this.getqus = function(id,callback)
    {
        var qu = format("select * from question where student={0}",id)
        db.query(qu,function(err,record)
        {
            if(err)
            {
                console.log("get QUS errrororo : " , err)
                callback(false)
            }
            else
                callback(record)                
        });
    }

    this.facqus = function(callback)
    {
        var qu = "select qid,qus,qdate,name from question,member where student in (select memberid from member where type='student') and question.student=member.memberid order by qdate DESC"
        db.query(qu,function(err,record)
        {
            if(err)
            {
                console.log("fac QUS errrororo : " , err)
                callback(false)
            }
            else
                callback(record)                
        });
    }
}


module.exports = new qusans()