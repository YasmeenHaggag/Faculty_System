import subject from "../models/subject.js";
import department from "../models/department.js";

/*router.get('/create_departments' , async ( req , res) => {
    await department.create({
        name: 'Computer Science',
        code: 'CS',
    });
    await department.create({
        name: 'Information Technology',
        code: 'IT',
    });
    await department.create({
        name: 'Information System',
        code: 'IS',
    });
    await department.create({
        name: 'Artificial Iintelligence',
        code: 'AI',
    });
})*/

/*export const create = async (req,res) => {
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/create', { departments });
}*/
export const show = async(req, res) => {
    // 1. Grap the _id
    const { _id } = req.params;
    console.log(_id);

    // 2.  Use the _id to get the department
    const singledep = await department
        .findById(_id)
        .populate('department')
        .lean();

    console.log(singledep);

    // 3. Render "show" templates

    res.render('department/show', { department: singledep });

};