"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContatoPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ E-mail enviado com sucesso!");
        form.reset();
      } else {
        setStatus(`❌ Erro: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Erro ao enviar o e-mail.");
    }
  };

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Contato</h2>
      <p className="text-gray-600 mb-10">
        Preencha o formulário abaixo ou entre em contato por um dos meios a seguir.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4 mb-10"
      >
        <input name="nome" type="text" placeholder="Nome" className="border rounded-lg p-3" />
        <input name="email" type="email" placeholder="E-mail" className="border rounded-lg p-3" />
        <textarea name="mensagem" placeholder="Mensagem" className="border rounded-lg p-3 h-32" />
        <button
          type="submit"
          className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>

      {status && <p className="text-gray-700 font-medium">{status}</p>}

      <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-700 mt-6">
        <div className="flex items-center gap-2">
          <Phone className="text-blue-800" /> (41) 99938-5318
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-blue-800" /> info@exemplo.com
        </div>
      </div>
    </section>
  );
}
