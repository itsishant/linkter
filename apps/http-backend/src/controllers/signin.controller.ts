import { Request, Response } from "express";

const SignIn = (req: Request, res: Response) => {

    try {

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