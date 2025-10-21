import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { SignIn } from "../controllers/signin.controller";

const router = Router();

router.route("/signup").post(AuthController.SignUp);
router.route("/verify-otp").post(AuthController.Verifyotp);
router.route("/signin").post(SignIn);

export default router;
