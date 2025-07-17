import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({ 
    service: "gmail",
    auth: { 
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
})

export const sendMail = async (to : string, subject: string, html: string) => {
    try {
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject,
            html,
        })
    } catch (error) {
        console.error(error);
    }
} 