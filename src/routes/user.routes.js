import { Router } from "express";
import { loginUser, registerUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middilewares/multer.js"
import { verifyJWT } from "../middilewares/auth.middileware.js"
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

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;