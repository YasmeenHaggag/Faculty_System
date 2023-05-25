import { Router } from "express";
import { login, loginForm, register, registerForm } from "../controllers/user.js";



const router1 = new Router();

router1.get('/register', registerForm);

router1.post('/register', register);

router1.get('/login', loginForm);

router1.post('/login', login);

export default router1;