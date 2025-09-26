import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { name, email, subject, message, projectType } = body

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Message: ${subject}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        })

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    } catch (error) {
        console.error("Nodemailer error:", error)
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
    }
}
