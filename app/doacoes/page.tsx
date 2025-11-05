"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { BadgeDollarSign } from "lucide-react";


export default function DoacoesPage() {
  const [mostrarQR, setMostrarQR] = useState(false);

  const dadosBancarios = `
    Banco: Banco do Brasil
    Agência: 1234-5
    Conta: 67890-1
    Favorecido: Educação que Transforma
    Chave Pix: educacao@transforma.org
    `;

  // Aqui definimos as imagens e os textos
  const projetos = [
    { src: "/img/projeto.jpg", titulo: "Oficinas de Leitura", descricao: "Promovendo o hábito da leitura entre jovens." },
    { src: "/img/projeto.jpg", titulo: "Laboratório Digital", descricao: "Acesso à tecnologia para comunidades carentes." },
    { src: "/img/projeto.jpg", titulo: "Aulas de Reforço", descricao: "Apoio escolar para alunos em vulnerabilidade." },
    { src: "/img/projeto.jpg", titulo: "Formação de Professores", descricao: "Capacitação contínua para educadores." },
    { src: "/img/projeto.jpg", titulo: "Espaço Criativo", descricao: "Aprendizado prático com arte e cultura." },
    { src: "/img/projeto.jpg", titulo: "Educação Ambiental", descricao: "Consciência ecológica e sustentabilidade." },
  ];

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Faça sua Doação</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Sua contribuição ajuda a transformar a educação e impactar vidas.
        Apoie nossos projetos e faça parte dessa mudança!
      </p>

      {/* Botão para gerar QR */}
      <button
        onClick={() => setMostrarQR(!mostrarQR)}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        {mostrarQR ? "Ocultar QR Code" : "Doar Agora"}
      </button>

      {/* Exibe o QR Code */}
      {mostrarQR && (
  <div className="mt-8 flex flex-col items-center">
    <div className="relative inline-block">
      {/* Imagem de fundo */}
      <Image
        src="/img/fundo-qrcode.png" // coloque o nome correto da imagem gerada
        alt="Fundo educativo"
        width={250}
        height={250}
        className="rounded-xl object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/60 rounded-xl" />

      {/* QR Code centralizado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <QRCodeCanvas value={dadosBancarios} size={180} />
      </div>

      {/* Ícone sobre o QR */}
      <BadgeDollarSign className="absolute top-2 right-2 w-8 h-8 text-green-700 bg-white/70 rounded-full p-1 shadow-md" />
        </div>

        <p className="text-gray-700 mt-4 text-sm">
          Escaneie o QR Code para realizar sua doação via Pix
        </p>
      </div>
    )}

      {/* Galeria de projetos com textos */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projetos.map((projeto, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative h-56 w-full rounded-xl overflow-hidden shadow-sm hover:scale-105 transition-transform">
              <Image src={projeto.src} alt={projeto.titulo} fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{projeto.titulo}</h3>
            <p className="text-gray-600 text-sm max-w-xs">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}