"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { BadgeDollarSign, Copy, ChevronDown } from "lucide-react";
import { createStaticPix, hasError } from "pix-utils";

export default function DoacoesPage() {
  const chavesPix = {
    picpay: {
      nome: "Jackson Mendes",
      chave: "jackson_mendes16@hotmail.com",
      cidade: "Curitiba",
      banco: "PicPay",
      cor: "green",
    },
    itau: {
      nome: "Jackson Mendes",
      chave: "+5541999385318",
      cidade: "Curitiba",
      banco: "Itaú",
      cor: "orange",
    },
  };

  const [chaveSelecionada, setChaveSelecionada] =
    useState<keyof typeof chavesPix | null>(null);
  const [copiado, setCopiado] = useState(false);

  // ✅ Função para copiar a chave PIX
  const copiarChave = async (chave: string) => {
    try {
      await navigator.clipboard.writeText(chave);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar a chave:', err);
    }
  };

  function gerarPayloadPix(chave: string, nome: string, cidade: string, valor?: number) {
    const pixObj = createStaticPix({
      merchantName: nome,
      merchantCity: cidade,
      pixKey: chave,
      transactionAmount: valor ?? 0,
      infoAdicional: "Doação - Educação que Transforma",
    });

    if (hasError(pixObj)) {
      console.error("Erro ao gerar Pix:", pixObj);
      return "";
    }

    return pixObj.toBRCode();
  }

  const chaveAtual = chaveSelecionada ? chavesPix[chaveSelecionada] : null;

  // ✅ Função para formatar a chave para exibição
  const formatarChave = (chave: string) => {
    if (chave.includes('@')) {
      return chave;
    }
    if (chave.includes('+55')) {
      const ddd = chave.slice(3, 5);
      const parte1 = chave.slice(5, 10);
      const parte2 = chave.slice(10);
      return `(${ddd}) ${parte1}-${parte2}`;
    }
    return chave;
  };

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Faça sua Doação</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(chavesPix).map(([key, { nome, banco, cor }]) => (
          <button
            key={key}
            onClick={() =>
              setChaveSelecionada(
                chaveSelecionada === key ? null : (key as keyof typeof chavesPix)
              )
            }
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm flex items-center gap-2
              ${
                chaveSelecionada === key
                  ? cor === 'orange' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-green-700 text-white'
                  : cor === 'orange'
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-green-600 text-white hover:bg-green-700'
              }`}
          >
            {nome} ({banco})
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-300 ${
                chaveSelecionada === key ? 'rotate-180' : ''
              }`} 
            />
          </button>
        ))}
      </div>

      {/* ✅ Container com animação suave */}
      <div className={`
        transition-all duration-500 ease-in-out overflow-hidden
        ${chaveAtual 
          ? 'max-h-[800px] opacity-100' 
          : 'max-h-0 opacity-0'
        }
      `}>
        {chaveAtual && (
          <div className="mt-8 flex flex-col items-center animate-in slide-in-from-top duration-500">
            {/* ✅ Container com informações da chave */}
            <div className={`w-full max-w-md mb-6 rounded-xl p-4 shadow-lg transform transition-all duration-500 ${
              chaveAtual.cor === 'orange' 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-bold text-lg">{chaveAtual.banco}</p>
                  <p className="opacity-90 text-sm">
                    {chaveAtual.chave.includes('@') 
                      ? 'Chave E-mail' 
                      : 'Chave Telefone'
                    }
                  </p>
                </div>
                <div className="text-right">
                  <p className="opacity-90 text-sm">Titular</p>
                  <p className="font-semibold">{chaveAtual.nome}</p>
                </div>
              </div>
              
              {/* ✅ Chave PIX com botão de copiar */}
              <div className="bg-white/20 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-mono break-all text-left">
                    {formatarChave(chaveAtual.chave)}
                  </p>
                  <button
                    onClick={() => copiarChave(chaveAtual.chave)}
                    className="ml-2 p-2 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
                    title="Copiar chave PIX"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                {copiado && (
                  <p className="text-green-300 text-xs mt-2 animate-pulse">
                    ✓ Chave copiada!
                  </p>
                )}
              </div>
            </div>

            {/* ✅ QR Code com animação */}
            <div className="relative inline-block transform transition-all duration-500 hover:scale-105">
              <Image
                src="/img/fundo-qrcode.png"
                alt="Fundo educativo"
                width={250}
                height={250}
                className="rounded-xl object-cover opacity-80"
              />
              <div className={`absolute inset-0 rounded-xl ${
                chaveAtual.cor === 'orange' 
                  ? 'bg-black/60'
                  : 'bg-black/60'
              }`} />

              <div className="absolute inset-0 flex items-center justify-center">
                <QRCodeCanvas
                  value={gerarPayloadPix(
                    chaveAtual.chave,
                    chaveAtual.nome,
                    chaveAtual.cidade
                  )}
                  size={180}
                  bgColor={chaveAtual.cor === 'orange' ? "" : ""}
                  fgColor="#FFFFFF"
                  level="M"
                />
              </div>

              <BadgeDollarSign className={`absolute top-2 right-2 w-8 h-8 bg-white/70 rounded-full p-1 shadow-md transition-all duration-300 hover:scale-110 ${
                chaveAtual.cor === 'orange' ? 'text-orange-600' : 'text-green-700'
              }`} />
            </div>

            <div className="mt-4 transform transition-all duration-500 delay-200">
              <p className="text-gray-700 text-sm">
                Escaneie o QR Code para doar via Pix ({chaveAtual.nome})
              </p>
              
              <p className="text-gray-500 text-xs mt-2 max-w-md">
                Ou copie a chave PIX acima e cole em seu aplicativo bancário
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Mensagem quando nenhuma chave está selecionada */}
      {!chaveAtual && (
        <div className="mt-12 transition-all duration-500">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-md mx-auto">
            <p className="text-blue-800 font-semibold text-lg mb-2">
              Selecione uma opção acima
            </p>
            <p className="text-blue-600 text-sm">
              Escolha entre PicPay ou Itaú para fazer sua doação via PIX
            </p>
          </div>
        </div>
      )}
    </section>
  );
}