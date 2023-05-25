import user from '../models/user.js';
import student from "../models/student.js";
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';

export const registerForm = (req, res) => {
    res.render('authentication/register');
};

export const register = async(req, res) => {
    const { username, email, password } = req.body;
    // Encrypt the password and store it 
    const salt = bcrypt.genSaltSync(10);
    const encryptedPass = bcrypt.hashSync(password, salt);
    await user.create({ username, email, password: encryptedPass });
    res.redirect('/login');
};

export const loginForm = (req, res) => {
    res.render('authentication/login');
};

export const login = async(req, res) => {
    const { email, password } = req.body;
    //Compare Passwords
    //email:email = email
    const loggedUser = await user.findOne({ email });
    const isCorrectPass = bcrypt.compareSync(password, loggedUser.password);
    if (!isCorrectPass) {
        return res.send('Incorrect Credentials');
    }
    //pass data to cookies
    // const data = {
    //     _id: loggedUser._id,
    //     email: loggedUser.email,
    // };
    // //encrypt data
    // const jwToken = Jwt.sign(data, process.env.JWT_SEC);
    // res.cookie('token', jwToken);

    res.redirect('/subjects');
};


// const express = require('express')
// const upload = require('express-fileupload')
// const app = express()
// app.use(upload())
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.handlebars')
// })

// app.post('/', (req, res) => {
//     if (req.files) {
//         console.log(req.files)
//         var file = req.files.file
//         var filename = file.name
//         console.log(filename)

//         file.mv('./uploads/' + filename, function(err) {
//             if (err) {
//                 res.send(err)
//             } else {
//                 res.send("file uploaded")
//             }
//         })
//     }
// })
// app.listen(4000)

import * as http from 'http';
import * as formidable from "formidable";
import * as fs from 'fs';



http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit"> value="upload"');
        res.write('</form>');
        return res.end();
    }
}).listen(4000);