import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email } = await request.json();

    // Basic Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const mailOptions = {
      from: `"Prosper Contact Form" <${user || "no-reply@prosperptky.com"}>`,
      to: "hi@10hatsbranding.com, meg@prosperptky.com",
      subject: `New Consult Request: ${name}`,
      text: `You have received a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nThis submission contains contact information only (compliant with PHI/HIPAA guidelines).`,
      html: `
        <div style="font-family: sans-serif; padding: 25px; color: #22344A; background-color: #FAF6EF; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #8AA38D;">
          <h2 style="font-family: serif; color: #22344A; border-bottom: 2px solid #8AA38D; padding-bottom: 10px; margin-bottom: 20px; font-size: 24px;">New Consult Request</h2>
          <p style="margin-bottom: 12px; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 12px; font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin-bottom: 24px; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #C98B73; text-decoration: none; font-weight: bold;">${email}</a></p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; font-size: 12px; color: #22344A; border-left: 4px solid #C98B73; line-height: 1.5;">
            <strong>Compliance Safeguard:</strong> This form is restricted to contact information only. It contains no health descriptions, symptoms, or injury history (PHI), enabling compliant delivery over standard email transport.
          </div>
        </div>
      `,
    };

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully via SMTP.");
    } else {
      console.warn("SMTP environment variables not configured. Logging contact form submission details:");
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
