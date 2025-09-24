import express, { Request, Response } from "express";
import { SignupZod } from "@repo/common-zod";
import { prisma } from "@repo/database/src";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "!@#$%^%@";

export class AuthController {
  static async SignUp(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const check = SignupZod.safeParse(req.body);
      if (!check.success) {
        return res.status(400).json({
          success: false,
          message: "body field required",
        });
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) return res.status(400).json({
        success: false,
        message: "Email already exists"
      })

      const hashPassword = await bcrypt.hash(password, 10);

      const createUser = await prisma.user.create({
        data: {
          email,
          password: hashPassword
        }
      })

      const token = jwt.sign(
      {
        id: createUser.email,
      },
      JWT_SECRET
    );

      if (createUser) return res.status(200).json({
        success: true,
        message: "User created successfully",
        token: token
      })

    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

}
