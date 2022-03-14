const express =require('express')
const router=express.Router()
const quoteServer1=require('../Services/QuoteServer')

router.post('/',function(req,res){
    console.log(req.body)
    try{
        res.json(quoteServer1.getAllData(req.body))
    }
    catch(err){
        console.log(`error is occur`,err.message)
    }
})
module.exports=router