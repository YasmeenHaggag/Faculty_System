import { Router } from "express";
import{  create, edit, index, show, store, update ,deleteOne } from '../controllers/subject.js';

const router = new Router();
router.get('/',  index);

router.get('/create',create); 

router.post('/', store );

router.get('/:id/edit', edit)

router.put('/:id' ,update)

router.get ('/:_id',show);

router.delete('/:id', deleteOne)

export default router;

