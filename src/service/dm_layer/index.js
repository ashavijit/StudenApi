const student=require('../api/schema/student');

const studentService={
    FindAll:()=>{
        return student.find({});
    
},
Create:(req)=>{
    let student=new student({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        rollno:req.body.rollno,
    


    });
},
FindByid:(id)=>{
    return student.findById(req.params.id);
},
Update:(req)=>{
    return student.findByIdAndUpdate(req.params.id,req.body,{new:true});
},
Delete:(id)=>{
    return student.findByIdAndDelete(id);
}

};
module.exports=studentService;