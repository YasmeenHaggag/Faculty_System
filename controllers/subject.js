import subject from "../models/subject.js";
import department from "../models/department.js";

export const  index = async (req, res) => {
const subjects = await subject.find({},{name: 1}).lean();

res.render('subjects/all',{ subjects });

};
export const create = async (req,res) => {
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/create', { departments });
}
export const store = async (req, res) => {
    const {name, code, department } = req.body;
    await subject.create({
        name,
        code,
        department
    });

   res.redirect('/subjects');
};

export const show = async (req, res) => {
// 1. Grap the _id
const { _id } = req.params;
console.log(_id);

// 2.  Use the _id to get the subject
const singleSubject = await subject
.findById(_id)
.populate('department')
.lean();

console.log(singleSubject);

// 3. Render "show" templates

res.render('subjects/show', { subject: singleSubject});

};