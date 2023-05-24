import user from '../models/user.js';
import student from "../models/student.js";
import bcrypt from 'bcryptjs';
import Jwt  from 'jsonwebtoken';

export const registerForm =(req,res) => {
    res.render('authentication/register');
};

export const register = async (req,res) => {
  const {username, email, password} = req.body;
// Encrypt the password and store it 
  const salt = bcrypt.genSaltSync(10);
  const encryptedPass = bcrypt.hashSync(password, salt);
  await user.create({username, email, password: encryptedPass});
    res.redirect ('/login');
};

export const loginForm =(req,res) => {
    res.render('authentication/login');
};

export const login = async (req,res) => {
    const {email, password} = req.body;
    //Compare Passwords
                                                                             //email:email = email
    const loggedUser = await user.findOne({email});
    const isCorrectPass = bcrypt.compareSync(password, loggedUser.password);
    if(!isCorrectPass) {
       return res.send('Incorrect Credentials');
    }
        //pass data to cookies
     const data = {
        _id: loggedUser._id,
        email: loggedUser.email,
     };
         //encrypt data
        const jwToken = Jwt.sign( data , process.env.JWT_SEC);
    res.cookie('token' , jwToken);
    
    res.redirect ('/subjects');
};

