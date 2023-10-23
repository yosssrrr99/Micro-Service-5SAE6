const express = require('express')

const router = express.Router()

const sujet = require ('../models/sujet')

const { ServerDescription } = require('mongodb')

router.get ('/', async (req,res)=>{
try {
    const sujets= await sujet.find()
    res.json(sujets)

}catch(e){
    res.send('error'+e)

}
})


router.get ('/:id', async (req,res)=>{
    try {
        const sujets= await sujet.findById(req.params.id)
        res.json(sujets)
    
    }catch(e){
        res.send('error'+e)
    
    }
    })




router.post('/', async (req,res)=>{
    const sujet1 = new sujet({

        title :req.body.title,
        about:req.body.about,
        description:req.body.description,
        tags:req.body.tags

    })

    try {
       const a1= await sujet1.save()
       res.json(a1)

    }
    catch(e){
        res.send('error'+ e)
    }




})

router.patch('/:id',async (req,res)=>{

try {
    const sujets= await sujet.findById(req.params.id)
    sujets.title =req.body.title
    sujets.about=req.body.about
    sujets.description=req.body.description
    sujets.tags=req.body.tags
    const a1= await sujets.save()
    res.json(a1)   

}
catch (e){
    res.send('error'+ e)
}

})


module.exports=router