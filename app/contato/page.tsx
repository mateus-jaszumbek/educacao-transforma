// app/contato/page.tsx
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContatoPage() {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Contato</h2>
      <p className="text-gray-600 mb-10">
        Preencha o formulário abaixo ou entre em contato por um dos meios a seguir.
      </p>

      <form className="max-w-md mx-auto flex flex-col gap-4 mb-10">
        <input type="text" placeholder="Nome" className="border rounded-lg p-3" />
        <input type="email" placeholder="E-mail" className="border rounded-lg p-3" />
        <textarea placeholder="Mensagem" className="border rounded-lg p-3 h-32" />
        <button
          type="submit"
          className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>

      <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-700">
        <div className="flex items-center gap-2">
          <Phone className="text-blue-800" /> (11) 98765-4321
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-blue-800" /> info@exemplo.com
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-blue-800" /> Rua Exemplo, 123 - Cidade, Estado
        </div>
      </div>
    </section>
  );
}