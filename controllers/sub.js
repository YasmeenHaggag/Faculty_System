import subject from "../models/subject.js";

export const  index = async (req, res) => {
    console.log(req.user);
    const subjects = await subject.find({},{name: 1}).lean();
    res.render('subjects/showSubjects',{ subjects });
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