const mongoose = require ('mongoose')

const sujetschema =new mongoose.Schema({

title :{
    type:String,
    required : true
},
about :{
    type:String,
    required : true
} ,
description :{
    type:String,
    required :true
}, 
tags :{
    type:String,
    required:true
}

})
module.exports=mongoose.model('Sujet',sujetschema)