import Jwt  from 'jsonwebtoken';

export const authentication = (req,res,next) => {
    
const {token} = req.cookies;

try{
const decoded = Jwt.verify(token, process.env.JWT_SEC);

req.user = decoded;
next();
} catch (error) {
 return res.send('Sorry , You are not allowed to access this page ');
}

};