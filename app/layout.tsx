'use client';

import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import WhatsAppFloatingButton from "./components/WhatsApp-Flutuante";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ✅ Versão simplificada - apenas remove os atributos uma vez
    const removeProblematicAttributes = () => {
      document.body.removeAttribute('cz-shortcut-listen');
      document.body.removeAttribute('data-gramm');
      document.body.removeAttribute('data-new-gr-c-s-check-loaded');
    };

    removeProblematicAttributes();

    // ✅ Opcional: Se quiser observar mudanças futuras
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          removeProblematicAttributes();
        }
      });
    });

    observer.observe(document.body, { 
      attributes: true 
    });

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Educação que Transforma</title>
        <meta name="description" content="Explore seu potencial com aprendizado transformador." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body className="bg-white text-gray-800" suppressHydrationWarning>
        {/* HEADER */}
        <header className="flex flex-wrap justify-between items-center px-6 py-4 shadow-sm gap-4">
          <Link href="/" className="flex items-center">
            <div
              className="w-32 h-12 sm:w-40 sm:h-16 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: "url('/img/logo.jpg')" }}
            />
          </Link>

          <nav className="flex flex-wrap gap-4 sm:gap-6 text-gray-700 text-sm sm:text-base">
            <Link href="/">Home</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/doacoes">Doações</Link>
          </nav>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="min-h-screen px-4 sm:px-8">{children}</main>

        <WhatsAppFloatingButton />

        {/* FOOTER */}
        <footer
          className="h-84 relative text-center text-sm text-gray-700 flex flex-col items-center justify-center py-8 sm:py-12 gap-3"
          style={{ backgroundImage: "url('/img/lapis.png')" }}
        >
          <div className="absolute inset-0 bg-white/70" />

          <div className="relative z-10 flex flex-col items-center gap-2">     
            <div className="relative z-10 text-black">
              © Educação que Transforma
            </div>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="https://www.instagram.com/educacao_que_transforma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                <Instagram className="w-[34px] h-[34px]" />
              </a>

              <a
                href="https://wa.me/5541999385318"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
              >
                <Image
                  src="/img/whatsapp.png"
                  alt="WhatsApp"
                  width={34}
                  height={34}
                  className="object-contain transition duration-300 hover:brightness-0 hover:invert-[49%] hover:sepia hover:saturate-[7483%] hover:hue-rotate-[94deg] hover:brightness-[95%] hover:contrast-[92%]"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}