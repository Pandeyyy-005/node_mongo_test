const mongoose=require('mongoose')
const connectDb=()=>{mongoose.connect("mongodb://localhost:27017/employe").then(()=>{
    console.log("connected..");
}).catch((error)=>{
    console.log(error);
    
})}
connectDb()
module.exports={connectDb}