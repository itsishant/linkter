import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { NodeMailer } from "../utils/node.mailer";

const router = Router();

router.route("/signup").post(AuthController.SignUp);
router.route("/send-otp").post(NodeMailer);

export default router;
