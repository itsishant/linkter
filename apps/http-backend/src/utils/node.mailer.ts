import nodemailer from "nodemailer"
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export const otpGenerator = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


export const create = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: dotenv.config().parsed?.EMAIL_USER,
            pass: dotenv.config().parsed?.EMAIL_PASS
        }
    })
}

export const sendOtpEmail = async (email: string, otp: string) => {
        const htmlTemplate = `<div style="
    background: linear-gradient(135deg, #0d1117, #161b22);
    color: #e6edf3;
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px 20px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
">
    <h2 style="
        color: #ff7f50;
        font-size: 28px;
        margin-bottom: 10px;
        text-shadow: 1px 1px 2px #000;
    ">
        Your Verification Code
    </h2>
    <p style="
        color: #9ec1ff;
        font-size: 16px;
        margin-bottom: 20px;
    ">
        Use the code below to verify your email address:
    </p>
    <div style="
        background: #2c2f38;
        padding: 20px 30px;
        border-radius: 10px;
        display: inline-block;
        margin: 20px 0;
        border: 2px dashed #ff7f50;
    ">
        <h1 style="
            color: #00ffcc;
            font-size: 32px;
            letter-spacing: 6px;
            font-weight: bold;
            text-shadow: 0 0 5px #00ffcc;
        ">
            ${otp}
        </h1>
    </div>
    <p style="
        color: #ffcc00;
        font-weight: bold;
        margin-bottom: 20px;
    ">
        This OTP will expire within 5 minutes
    </p>
    <p style="
        color: #b0b0b0;
        font-size: 14px;
        margin-bottom: 10px;
    ">
        If you didn’t request this, you can safely ignore this email.
    </p>
    <p style="
        color: #808080;
        font-size: 12px;
    ">
        © ${new Date().getFullYear()} PDF Chater Inc.
    </p>
</div>

    `;

    await create().sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify your email",
        html: htmlTemplate,
    });
};


// export const CheckOtp = async (req: Request, res: Response) => {

//     const { otp } = req.body;

//     try {

//         if ( !otp ){
//             return res.status(422).json({
//                 success: false,
//                 message: "OTP required"
//             })
//         }       
     
//     }
//     catch (error){
//         console.log(`Error while checking otp ${error}`);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         })
//     }
// }
