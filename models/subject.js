import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    required_subject: {
        type: String,
        required: false
    },

    department: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'departments'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'user'
    },
    student: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'students'
    }

}, { timestamps: true });

export default model('subject', subject);