import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

console.log(registerUser);
router.route("/register").post(registerUser)
    //router.route("/login").post(registerUser)

export default router;


// import { Router } from 'express';
// import { registerUser } from '../controllers/user.controller.js';

// const router = Router();

// console.log(registerUser); // Should log the function definition

// router.post('/register', registerUser);

//export default router;