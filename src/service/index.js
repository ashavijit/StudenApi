const Student=require('./api/schema/index.js');

//create a new student
exports.student_create=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        rollno:req.body.rollno,
    });
    student.save()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while creating the student."
        });
    }
    );
};
//retrieve all students
exports.all_students=(req,res)=>{
    Student.find()
    let rollno=student.find({rollno:req.params.rollno})
    .then(data=>{
        var message=""
        if(data.length==0 || rollno.length==0)
            message="No student found with this rollno"
            else message="Student found"
            res.send({
                success:true,
                message:message,
                data:data
            });
        
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while retrieving students."
        });
    })


    
}

//find student by id
exports.student_find_by_id=(req,res)=>{
    Student.findById(req.params.id)
    .then(data=>{
        if(!data)
            res.status(404).send({
                message:"Student not found with id"+req.params.id
            });
        else
            res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while retrieving student with id"+req.params.id
        });
    }
    );
}

//update student by id
exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(data=>{
        if(!data)
            res.status(404).send({
                message:"Student not found with id"+req.params.id
            });
        else
            res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while retrieving student with id"+req.params.id
        });
    }
    );
}

//delete student by id
exports.student_delete=(req,res)=>{
    Student.findByIdAndDelete(req.params.id)
    .then(data=>{
        if(!data)
            res.status(404).send({
                message:"Student not found with id"+req.params.id
            });
        else
            res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while retrieving student with id"+req.params.id
        });
    }
    );
}


