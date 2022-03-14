const express=require('express')
const router =express.Router()
const quoteServer=require('../Services/QuoteServer')

router.delete('/',function(req,res){
    // console.log(req.body)
    try{
        res.json(quoteServer.deleteData(req.body))
    }
    catch(err)
    {
        console.log(`error is Occured`,err.message)
    }
})
module.exports=router