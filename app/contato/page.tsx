"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <section className="px-6 py-24 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">Contato</h2>

      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Entre em contato conosco pelo canal que preferir. Teremos prazer em te
        atender.
      </p>

      {/* BOTÕES */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {/* WHATSAPP */}
        <a
          href="https://wa.me/5541999385318?text=Olá,%20vim%20pelo%20site%20Educação%20que%20Transforma!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-green-500 hover:scale-105 transition-transform"
        >
          <MessageCircle size={22} />
          WhatsApp
        </a>

        {/* E-MAIL */}
        <a
          href="mailto:jackson_mendes16@hotmail.com?subject=Contato pelo site"
          className="inline-flex items-center justify-center gap-3 bg-blue-900 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-blue-800 hover:scale-105 transition-transform"
        >
          <Mail size={22} />
          E-mail
        </a>
      </div>

      {/* CONTATOS SECUNDÁRIOS */}
      <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700 mt-14 text-lg">
        <div className="flex items-center gap-3">
          <Phone className="text-blue-800" />
          <span>(41) 99938-5318</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-blue-800" />
          <span>jackson_mendes16@hotmail.com</span>
        </div>
      </div>
    </section>
  );
}
