//import express module
var express=require('express')
//cors import
var cors = require('cors');
const app=express()

//port number
const port= process.env.PORT
//const port= 1122

//get method imported successfully
const users=require('./MainFiles/Routes/getmethod')
//post method imported successfully
const postUsers=require('./MainFiles/Routes/postmethod')
//update method imported successfully
const updateUsers=require('./MainFiles/Routes/updatemethod')
//delete method imported successfully
const deleteUsers=require('./MainFiles/Routes/deletemethod')
//inserting method imported successfully
const insertUsers=require('./MainFiles/Routes/registermethod')
//user confirmation imported successfully
const singleData=require('./MainFiles/Routes/userconfirm')

//incoming json request and  put parses data in to req.body
app.use(express.json())
app.use(cors())
app.options('*', cors());
app.use(cors({
    origin:"*"
  }))
// showing live message
app.get('/',(req,res)=>{
   res.json({message:"live message successful"})
})
///get Method
app.use('/getdata',users)
//post method
app.use('/postdata',postUsers)
//update method
app.use('/updatedata',updateUsers)
//delete method
app.use('/deletedata',deleteUsers)
//insert method
app.use('/insertdata',insertUsers)
//userinfo method
app.use('/userid',singleData)

// server connection enable
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})