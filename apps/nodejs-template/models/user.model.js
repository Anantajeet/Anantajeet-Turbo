import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

    userName: {
        type: string,
        required: true,
    },

    email: {
        type: string,
        required: true,
        unique: true
    },

    password: {
        type: string,
        required: true,
        unique: true
    }

})

export const users = mongoose.model("users", userSchema);