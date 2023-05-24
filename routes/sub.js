import { Router } from "express";
import{  index , show } from '../controllers/sub.js';
import mongoose from "mongoose";

const router = new Router();

router.get('/',  index);

router.get ('/:_id',show);

router.get('/',function(req,res,next){
   const Query= 'SELECT * FROM subjects ORDERBY ASC'
   mongoose.Query(Query, function(error,data){
     if(error){
           throw error;
     } else {
            res.render('students',{Action: list,students: data});
     }
   });
});

export default router;