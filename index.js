const express=require('express');
/* const app=express(); */
const path=require('path');
const createerror=require('http-errors');
const bodyParser=require('body-parser');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');


const studentRouter=require('./src/service/api/schema/index.js');

const dbConfig=require('./src/db.js');

var indexRouter=require('./src/service/api/schema/index.js');
/* var studentRouter=require('./src/service/api/schema/index.js'); */

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/',indexRouter);
app.use('/student',studentRouter);

app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).send({
        message:err.message||"Some error occurred while retrieving students."
    });
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

module.exports=app;