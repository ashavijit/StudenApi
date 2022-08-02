const express = require('express');
var router = express.Router();

const student_controller=require('../index.js');

router.get('/',student_controller.findAll);
router.get('/:id',student_controller.findById);
router.post('/create',student_controller.create);
router.put('/update/:id',student_controller.update);
router.delete('/delete/:id',student_controller.delete);


module.exports=router;