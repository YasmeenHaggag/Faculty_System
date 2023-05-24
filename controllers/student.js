import student from "../models/student.js";
import bcrypt from 'bcryptjs';

export const s_registerForm = (req,res) => {
    res.render('authentication/studentRegister');
};
export const register = async (req,res) => {
    const {username, password, academicnumber} = req.body;
  // Encrypt the password and store it 
    const salt = bcrypt.genSaltSync(10);
    const encryptedPass = bcrypt.hashSync(password, salt);
    await student.create({username, password: encryptedPass, academicnumber});
      res.redirect ('/studentLogin');
  };
  
  export const s_loginForm = (req,res) => {
      res.render('authentication/studentLogin');
  };
  
  export const login = async (req,res) => {
      const {username, password} = req.body;
      //Compare Passwords
                                                                              
      const loggedStudent = await student.findOne({username});
      const isCorrectPass = bcrypt.compareSync(password, loggedStudent.password);
      if(!isCorrectPass) {
         return res.send('Incorrect Credentials');
      }
      
      res.redirect ('/showSubjects');
  };
  