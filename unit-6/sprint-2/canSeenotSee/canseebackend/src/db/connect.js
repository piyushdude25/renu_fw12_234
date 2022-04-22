const mongoose=require("mongoose");
 mongoose.connect("mongodb://localhost:27017/cansee").then((e)=>{
     console.log("connection successfull");

 }).catch((e)=>{
     console.log(e)
 })