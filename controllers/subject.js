import subject from "../models/subject.js";
import department from "../models/department.js";
import user from "../models/user.js";


export const index = async(req, res) => {
    console.log(req.user);
    const subjects = await subject.find({ doctor: req.user._id }, { name: 1 }).lean();
    res.render('subjects/all', { subjects });

};
export const create = async(req, res) => {
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/create', { departments });

};
export const store = async(req, res) => {
    const { name, code, required_subject, department } = req.body;
    await subject.create({
        name,
        code,
        required_subject,
        department,
        doctor: req.user._id
    });

    res.redirect('/subjects');
};
export const edit = async(req, res) => {

    const { id } = req.params;

    const editFormSubject = await subject.findById(id).lean();
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/edit', { departments, subject: editFormSubject });

};
export const update = async(req, res) => {
    const { name, code, required_subject, department } = req.body;
    const { id } = req.params;
    await subject.findByIdAndUpdate(id, {
        $set: { name, code, required_subject, department }
    });

    res.redirect('/subjects');
};

export const show = async(req, res) => {
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

    res.render('subjects/show', { subject: singleSubject });

};

export const deleteOne = async(req, res) => {
    const { id } = req.params;
    await subject.findByIdAndDelete(id);

    return res.redirect('/subjects');
};
// doctor: req.user._id,