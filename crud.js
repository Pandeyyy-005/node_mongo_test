const mongoose=require('mongoose')
const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      unique:true,
      required:true  
    },
    dpt:{
     type:String,
     enum:['HR','IT','SALES','FINANCE','MARKETING'],
     required:true
    },
    age:{
        type:Number,
        min:18,
        max:45,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        min:10000,
        max:50000
    },
    isActive:{
   type:Boolean,
   default:true
    }
})
const empModel=mongoose.model('employe',empSchema)
async function displayData(){
try {
    const data=await empModel.find()
    console.log(data);
    
} catch (error) {
    console.log(error);
    
}
}

async function insertData(ename,eage,eemail,edpt,ecity,eisActive,esal){
    try {
        await empModel.create({name:ename,age:eage,email:eemail,dpt:edpt,city:ecity,isActive:eisActive,sal:esal})
        console.log('data inserted..');
        displayData()
        
    } catch (error) {
        console.log(error);
        
    }
}
insertData('tom',12,'tom@123','IT','mumbai',false)

async function updateData(){
    try {
        await empModel.updateOne({name:'tom'},{$set:{age:29}})
        console.log('updated..');
        
    } catch (error) {
        console.log(error);
        
    }
}
updateData()

async function deleteData() {
    try {
        await empModel.deleteOne({name:'tom'})
    } catch (error) {
        console.log(error);
        
    }
}
deleteData()