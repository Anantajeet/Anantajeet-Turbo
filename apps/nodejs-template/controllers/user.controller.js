import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

import consola from "consola";
import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {


    try {
        const { username, email, password } = req.body;

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            res.status(400).json({ status: false, message: "User already existed" })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        const newuser = await User.create({
            username,
            password: hashpassword,
            email
        })

        return res.status(200).json(
            res.status(200).json({ status: true, newuser, message: "User already existed" })

        )
    } catch (e) {
        res.status(500).json({ status: false, e, message: "Internal sever Errors" })
    }
}