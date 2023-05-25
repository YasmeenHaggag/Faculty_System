import { Schema, model } from "mongoose";

const user = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

}, { timestamps: true });

export default model('user', user);