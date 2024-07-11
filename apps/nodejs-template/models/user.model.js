import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, "Username is required"],
            minLength: [3, "Minimum length of username is 3 characters"],
            maxLength: [30, "Maximum length of username is 30 characters"],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            maxLength: [30, "Maximum length of username is 30 characters"],
        },

        password: {
            type: String,
            trim: true,
            required: [true, "Password is required"],
        },
    },
    {
        timestamps: true,
    },
);

export const User = mongoose.model("users", userSchema);
