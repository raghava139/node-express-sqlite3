const sqlite=require('better-sqlite3')
const path=require('path')
// console.log(path)
const db=new sqlite(path.resolve('Login_Practice.db'),{fileMustExist:true})

//get
function gettingData(sql,params)
{
    return db.prepare(sql).all(params)
}

//post
function postmethod(sql,params)
{
    return db.prepare(sql).all(params)
}

//update
function updatemethod(sql,params)
{
    return db.prepare(sql).run(params)
}

//delete
function deletemethod(sql,params)
{
    return db.prepare(sql).run(params)
}

//inserting 
function insertmethod(sql,params)
{
    return db.prepare(sql).run(params)
}

//user id confirmations
function userinfo(sql,params)
{
    return db.prepare(sql).all(params)
}

//export modules
module.exports={
    gettingData,
    postmethod,
    updatemethod,
    deletemethod,
    insertmethod,
    userinfo
}