// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { message: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Ex: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`, // <- use o seu Gmail aqui
      to: process.env.EMAIL_TO,
      subject: "Nova mensagem do formulário",
      text: mensagem,
      html: `<p>${mensagem}</p><p>De: ${nome} - ${email}</p>`,
    });

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { message: "Erro ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
