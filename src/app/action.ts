"use server"

import { sendEmail } from "@/lib/send-email"

type DataT= { 
    name: string;
    email: string;
    phone: string;
    message: string;
    page: string;
}

export async function submitForm(data: DataT) {
    
    try {
        
        await sendEmail({
            toEmail: data.email,
            subject: `Thank you for your message! - BMUS`,
            body: `
                <h2>Thank you for your message!</h2> <br/>
                <p>Hi ${data.name},</p> <br/>
                <p>We have received your message and will get back to you soon.</p> <br/>
                <p>Best Regards,</p>
                <p>Vishnu Sharma</p>
            `
        })

        await sendEmail({
            toEmail: "devamericanpalwal@gmail.com",
            subject: `New message from ${data.name} - BMUS`,
            body: `
                <h2>New message from ${data.name}</h2> <br/>
                <p>Hi Vishnu,</p> <br/>
                <p>We have received your message from ${data.name} and will get back to you soon.</p> <br/>
                <p>Best Regards,</p>
                <p>Ajay Gaur</p>
            `
        })

        return {
            success: true,
            message: "Thank you for your message!"
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}