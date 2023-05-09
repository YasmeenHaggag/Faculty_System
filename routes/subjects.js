import { Router } from "express";
import department from '../models/department.js'
import subject from '../models/subject.js'
const router=new Router();


router.get('/', async(req,res) => {
    const subjects=await subject.find();
    console.log(subjects);
    res.render('subjects/all',{subjects});
});
export default router;

/*router.get('/createSubject',async(req,res) => {
    await subject.create({
     name: 'c++ ',
     code:'101010100',
     });
     
     res.send('Added');
 });*/

/*router.get('/createDepartment',async(req,res) => {
    await department.create({
     name: 'computer ',
     code:'12344',
     });
     await department.create({
         name: 'Graphic ',
         code:'9876',
     });
     await department.create({
         name: 'System ',
         code:'8888',
     });
     res.send('Added');
 });
export default router;*/


/*router.get('/createDepartment',async(req,res) => {
   await subjects.create({
    subName: 'computer ',
    subCode:'12344',
    subDepartment: 'cs' ,
    });
    await subjects.create({
        subName: 'Graphic ',
        subCode:'9876',
        subDepartment: 'IT' ,
    });
    await subjects.create({
        subName: 'System ',
        subCode:'8888',
        subDepartment: 'IS' ,
    });
    res.send('Added');
});*/

