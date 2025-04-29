import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "devamericanpalwal@gmail.com",
        pass: "ajaygaur.in@gmail.com",
    },
});

type SendEmail = {
    toEmail: string;
    subject: string;
    body: string;
}

export async function sendEmail({toEmail, subject, body}: SendEmail) {
    
    return await transporter.sendMail({
        from: "ajaygaur.in@gmail.com",
        to: toEmail,
        subject: subject,
        html: body
        
    });
}