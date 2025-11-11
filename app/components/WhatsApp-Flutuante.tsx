"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsAppFloatingButton() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://wa.me/5541999385318"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-20  right-6 z-50 cursor-pointer" // Mudei bottom-6 para top-6
    >
      {/* Botão completo - AUMENTEI O TAMANHO */}
      <div
        className="flex items-center bg-green-500 rounded-full shadow-2xl overflow-hidden transition-all duration-300 hover:bg-green-600 hover:shadow-2xl"
        style={{ width: hover ? 200 : 70, height: 70 }} // Aumentei altura e largura
      >
        {/* Ícone MAIOR */}
        <div className="flex items-center justify-center w-16 h-16 flex-shrink-0">
          <Image
            src="/img/whatsapp.png"
            alt="WhatsApp"
            width={40} // Aumentei o ícone
            height={34}
            className="object-contain"
          />
        </div>

        {/* Texto aparece ao lado */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            hover ? "w-auto pl-3 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <span className="text-white font-semibold whitespace-nowrap text-sm">
            Fale Conosco
          </span>
        </div>
      </div>
    </a>
  );
}