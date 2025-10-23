// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem } = await req.json();

    // Validação simples
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Configura o transporter do Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true se usar 465
      auth: {
        user: process.env.SMTP_USER,       // seu Gmail
        pass: process.env.SMTP_PASS,       // App Password (16 chars, sem espaços)
      },
    });

    // Testa a conexão antes de enviar
    await transporter.verify();
    console.log("SMTP conectado com sucesso!");

    // Envia o e-mail
    const info = await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`, // obrigatoriamente seu Gmail
      to: process.env.EMAIL_TO,
      subject: "Nova mensagem do formulário",
      text: `Mensagem: ${mensagem}\nDe: ${nome} - ${email}`,
      html: `<p>Mensagem: ${mensagem}</p><p>De: ${nome} - ${email}</p>`,
    });

    console.log("E-mail enviado: ", info.messageId);

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);

    // Retorna detalhes para debug (somente se necessário)
    return NextResponse.json(
      { message: "Erro ao enviar o e-mail.", error: error.message },
      { status: 500 }
    );
  }
}
