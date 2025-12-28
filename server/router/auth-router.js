import express from "express";
import { register, login, user } from "../controller/auth-controller.js";
import { validate } from "../middleware/validate-middleware.js";
import { loginSchema, signUpSchema } from "../validator/auth-validator.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
const router = express.Router();

router.route("/register").post(validate(signUpSchema), register);
router.route("/login").post(validate(loginSchema), login);

router.route("/user").get(authMiddleware, user);

export default router;
