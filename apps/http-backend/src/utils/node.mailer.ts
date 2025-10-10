import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();

export const create = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: dotenv.config().parsed?.EMAIL_USER,
            pass: dotenv.config().parsed?.EMAIL_PASS
        }
    })
}

(async () => {
    const info = await create().sendMail({
        from: dotenv.config().parsed?.EMAIL_USER,
        to: "demo@gmail.com",
        subject: "Test Email to modak",
        text: "Hello from modak",
        html: "<h1>hello world</h1>"
    })
    
console.log("Message sent successfully");
})();
