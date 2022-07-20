const  express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authroute=require("./routes/auth")
const userRoute=require("./routes/user")
const PostRoute=require("./routes/post")
const CatogaryRoute=require("./routes/catogary")
const app=express(); 


dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to db ")).catch(err=>console.log(err) )


app.use("/server/auth",authroute);
app.use("/server/user",userRoute);
app.use("/server/post",PostRoute);
app.use("/server/catogary",CatogaryRoute);


 app.listen(8800,()=>{
 
    console.log("connected to server !");
})

