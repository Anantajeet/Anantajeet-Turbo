import { Router } from "express";
import { signupUser } from "../controllers/user.controller.js";

const router = Router();

// router.get("/:username", getUser);
// router.post("/login", loginUser);
router.post("/signup", signupUser);
// router.patch("/update", updateUser);
// router.delete("/logout", deleteUser)

export default router