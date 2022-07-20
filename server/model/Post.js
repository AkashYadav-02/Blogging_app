const mongoose=require("mongoose");
  const PostSchema=new mongoose.Schema({

   title:{
    type:String,
   require:true,
   unique:true,


  },
  description:{
    type:String,
    required:true,
  },
  photo :{
    type:String,
    required:false,
  },
  username:{
    type:String,
    required:true,
  },
  catogaries:{
    type:Array,
    required:false,
  },},{timestamps:true});
  

  module.exports=mongoose.model("Post",PostSchema);
  