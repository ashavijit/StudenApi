const mongoose=require('mongoose');
const schema=mongoose.Schema;

let StudentSchema=new schema({
    name:{type:String,required:true,max:25},
    age:{type:Number,required:true,min:5,max:30},
    email:{type:String,required:true,max:25},
    phone:{type:Number,required:true,min:10,max:10},
    address:{type:String,required:true,max:25},
    rollno:{type:Number,required:true,min:1,max:12},
},{
    timestamps:true
});

module.exports=mongoose.model('Student',StudentSchema);