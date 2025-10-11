import nodemailer from "nodemailer"
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
app.use(express.json());

export const create = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: dotenv.config().parsed?.EMAIL_USER,
            pass: dotenv.config().parsed?.EMAIL_PASS
        }
    })
}

 const htmlTemplate = `
  <div style="background:#0d1117;color:#e6edf3;font-family:Arial,Helvetica,sans-serif;
              padding:40px 20px;text-align:center;border-radius:10px;">
    <h2 style="color:#58a6ff;">Verify Your Email</h2>
    <p style="color:#8b949e;">Use the code below to verify your email address:</p>
    <div style="background:#161b22;padding:15px 25px;border-radius:8px;
                display:inline-block;margin:20px 0;">
      <h1 style="color:#ffffff;letter-spacing:4px;">YOUR_CODE_HERE</h1>
    </div>
    <p style="color:#8b949e;">If you didn’t request this, you can ignore this email.</p>
    <p style="color:#30363d;font-size:12px;">© ${new Date().getFullYear()} Modak Inc.</p>
  </div>
`;

export const NodeMailer = async (req: any, res:any) => {
    try {

        const { email } = req.body;

        if (!email) {
            return res.status(422).json({
                success: false,
                message: "Email field is required"
            })
        }

        await create().sendMail({
        from: dotenv.config().parsed?.EMAIL_USER,
        to: email,
        subject: "Test Email to modak",
        text: "Hello from modak",
        html: htmlTemplate.replace("YOUR_CODE_HERE", "12123422")
    })
    

    return res.status(200).json({
        success: true,
        message: "Email sent successfully"
    })

    } catch (error){
        console.log(`Error while sending mail :${error}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


