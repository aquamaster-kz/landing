"use server";

import nodemailer from "nodemailer";

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const { name, email, message }: EmailRequest = await req.json();

  const salesEmail = "sales@aquamaster.kz"

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASS,
    },
    logger: true,
    debug: true,
  });

  const mailOptions = {
    from: salesEmail,
    to: salesEmail,
    subject: `Новое сообщение от ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Спасибо! Мы свяжемся с вами в ближайшее время." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Не удалось отправить сообщение." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
