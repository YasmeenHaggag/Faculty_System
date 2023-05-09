import express from "express";
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import subjectsRouter from './routes/subjects.js'
//import departmentsRouter from './routes/departments.js'



const app=express();
mongoose.connect(process.env.mongoURL);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templetes');

//app.get('/subjects',(req,res) => {
   // res.render('departments/all')
//})

app.use('/subjects',subjectsRouter);
//app.use('/department',departmentsRouter);


app.listen(process.env.port,'127.0.0.1',()=>{
    console.log("runned");
})






