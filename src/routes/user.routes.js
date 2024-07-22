import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middilewares/multer.js"
const router = Router();

console.log(registerUser);
router.route("/register").post(upload.fields([{
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]), registerUser)
    //router.route("/login").post(registerUser)



export default router;