import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import consola from "consola";

export const signupUser = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            throw new ApiError(409, "User already existed")
        }

        const newuser = await User.create({
            username,
            password,
            email
        })

        return res.status(200).json(
            new ApiResponse(200, newuser, "User signup successfully")
        )
    } catch (e) {
        consola.error(e)
        throw new ApiError(500, "Internal sever Errors")
    }
}