import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const signupUser = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            throw new ApiError(409, "User already existed")
        }

        const newuser = await User.create({
            username,
            password,
            email
        })

        await newuser.save();

        return res.status(200).json(
            new ApiResponse(200, user, "User signup successfully")
        )
    } catch (e) {
        console.log(e);
        throw new ApiError(500, "Internal sever Errors")
    }
}