const express=require('express')
const router =express.Router()
const quoteServer=require('../Services/QuoteServer')

router.get('/',function(req,res){
    // console.log(req.query)
    try{
        res.json(quoteServer.getAllData(req.query))
    }
    catch(err)
    {
        console.log(`error is Occured`,err.message)
    }
})
module.exports=router