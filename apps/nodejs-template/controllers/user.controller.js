import { User } from "../models/user.model.js"

import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {


    try {
        const { username, email, password } = req.body;

        const existedUser = await User.findOne({
            $or: [{ email }, { username }]
        })

        if (existedUser) {
            return res.status(400).json({ status: false, message: "User already existed" })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            password: hashpassword,
            email
        })

        await newUser.save()

        return res.status(200).json({
            status: true,
            newUser,
            message: "User SignIn Successfully"
        })

    } catch (e) {
        res.status(500).json({ status: false, e, message: "Internal sever Errors" })
    }
}