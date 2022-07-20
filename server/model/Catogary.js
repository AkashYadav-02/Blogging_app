const mongoose=require("mongoose");
  const CatogarySchema=new mongoose.Schema(
   {
      name: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );

  module.exports=mongoose.model("Catogary",CatogarySchema);
  