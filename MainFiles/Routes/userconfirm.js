const express=require('express')
const router =express.Router()
const quoteServer=require('../Services/QuoteServer')

router.post('/',function(req,res){
    // console.log(req.query)
    try{
        res.json(quoteServer.userData(req.body))
    }
    catch(err)
    {
        console.log(`error is Occured`,err.message)
    }
})
module.exports=router