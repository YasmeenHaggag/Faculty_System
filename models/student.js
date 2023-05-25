import { Schema, model } from "mongoose";

const student = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    academic_number: {
        type: String,
        require: true
    }

}, { timestamps: true });

export default model('student', student);