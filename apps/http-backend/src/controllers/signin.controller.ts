import { prisma } from "@repo/database";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/jwt";
import bcrypt from "bcrypt";
const SignIn = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {
            return res.status(422).json({
                success: false,
                message: "all fields required"
            })
        }

        const checkEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!checkEmail) {
            return res.status(404).json({
                success: false,
                message: "Email not found"
            })
        }

        const checkPassword = await bcrypt.compare(password, (checkEmail.password) as string);

        if (!checkPassword){
            return res.status(401).json({
                success: false,
                message: "Invaild credentials"
            })
        }

        const token = jwt.sign({
            id: checkEmail.email
        },
    JWT_SECRET);

    return res.status(200).json({
        success: true,
        message: "User signed in successfully",
        token: token
    })

    } catch (error) {
        console.log(`Error while sign in ${error}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}

export {
    SignIn
}
