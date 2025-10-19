import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

router.route("/signup").post(AuthController.SignUp);
router.route("/verify-otp").post(AuthController.Verifyotp);

export default router;
