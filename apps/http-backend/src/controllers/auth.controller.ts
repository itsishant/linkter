import express, { Request, Response } from "express";
import { prisma } from "@repo/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { otpGenerator, sendOtpEmail } from "../utils/node.mailer";
import { JWT_SECRET } from "../utils/jwt";

interface IBody {
  newOtp: Number
}

export class AuthController {
  static async SignUp(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(422).json({
          success: false,
          messgae: "Input fields required"
        })
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          email
        },
      });

      const newotp = otpGenerator();
      const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

      if (existingUser)
        return res.status(400).json({
          success: false,
          message: "Email already exists",
        });

      const createUser = await prisma.user.create({
        //@ts-ignore
        data: {
          email,
          otp: newotp.toString(),
          otpExpiresAt
        },
      });

      const token = jwt.sign(
        {
          id: createUser.email,
        },
        JWT_SECRET,
      );

      await sendOtpEmail(email, newotp);

      if (createUser)
        return res.status(200).json({
          success: true,
          message: "User created successfully",
          token: token,
        });

    } catch (error) {
      console.log(`Error while creating user ${error}`)
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  static async Verifyotp(req: Request, res: Response) {

    const { otp, email, password } = req.body;

    try {

      if (!otp || !password){
        return res.status(422).json({
          success: false,
          message: "Otp field required"
        })
      }

      const findEmail = await prisma.user.findUnique(
        {where: {
          email
        }}
      )

      if (!findEmail || findEmail.otp !== otp || findEmail.otpExpiresAt! < new Date()) {
        return res.status(404).json({
          success: false,
          message: "Inavild or incorrect OTP"
        })
      }

      const hashPassword = await bcrypt.hash(password, 10);

      await prisma.user.update({
        where:{email},
        data: {
          password: hashPassword,
          otp: null,
          otpExpiresAt: null
        }
      })

      return res.status(200).json({
        success: true,
        message: "User verified and created successfully"
      })

    } catch (error) {
      console.log(`Error while verifyying otp and creating user ${error}`);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error"
      })
    }
  }
}
  