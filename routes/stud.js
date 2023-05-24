import { Router } from "express";
import { login, register, s_loginForm, s_registerForm } from "../controllers/student.js";

const router = new Router();

router.get('/studentRegister', s_registerForm);

router.post('/studentRegister', register);

router.get('/studentLogin', s_loginForm);

router.post('/studentLogin', login);

export default router;