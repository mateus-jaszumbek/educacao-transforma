// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center p-10 space-y-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="max-w-md text-left">
          <h2 className="text-6xl font-bold mb-4">Educação</h2>
          <h2 className="text-6xl font-bold mb-4">que</h2>
          <h2 className="text-6xl font-bold mb-4">Transforma</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Unindo forças, podemos contribuir para o desenvolvimento de crianças em situação de pobreza. 
            Com sua ajuda, mais de 300 crianças e adolescentes terão a oportunidade de continuar estudando, 
            evitando o abandono escolar.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
            <Link href="/doacoes">Faça sua doação</Link>
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-1 -left-10 bg-blue-600 rounded-full p-3 shadow-md text-4xl flex items-center justify-center">
            <Image
              src="/img/lampada.jpg"
              alt="Lâmpada"
              width={40}
              height={100}
              className="rounded-full"
            />
          </div>
          <Image
            src="/img/estudante.jpg" 
            alt="Estudante feliz"
            width={700}
            height={100}
            className="rounded-tl-4xl rounded-bl-4xl shadow-lg"
          />    
        </div>  
      </div>

      {/* Seção Sobre o Projeto */}
      <div className="text-center max-w-4xl mt-16 bg-blue-50 p-8 rounded-2xl">
        <h3 className="text-3xl font-bold mb-6">Sobre o Projeto</h3>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          O projeto <strong>Educação que Transforma</strong> tem o objetivo de ajudar pais ou responsáveis 
          que não têm condições de comprar o material escolar. Pensando nisso, buscamos instituições próximas 
          de famílias que precisam desta ajuda.
        </p>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Não conseguimos abraçar a todos que precisam. Por isso, fazemos o convite para que, juntos, 
          possamos ampliar ainda mais o alcance do projeto e a ajuda às famílias.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-4 text-green-600">8ª Edição - 2025</h4>
          <p className="text-gray-600 mb-4">
            Arrecadações abertas para a compra de material escolar do ano letivo
          </p>
        </div>
      </div>

      {/* Seção Como Ajudar */}
      <div className="text-center max-w-4xl mt-8">
        <h3 className="text-3xl font-bold mb-6">Como Você Pode Ajudar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="font-bold text-lg mb-2">Doação em Dinheiro</h4>
            <p className="text-gray-600 text-sm">
              Valor médio de cada kit é de <strong>R$ 50,00</strong>. 
              Você pode contribuir doando o valor de um ou mais kits.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="text-3xl mb-4">📢</div>
            <h4 className="font-bold text-lg mb-2">Divulgação</h4>
            <p className="text-gray-600 text-sm">
              Compartilhe o projeto em suas redes sociais e ajude a alcançar mais pessoas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="text-3xl mb-4">🎒</div>
            <h4 className="font-bold text-lg mb-2">Doação de Materiais</h4>
            <p className="text-gray-600 text-sm">
              Doe os materiais diretamente. Entre em contato para saber a lista completa.
            </p>
          </div>
        </div>

        {/* Lista de Materiais */}
        <div className="bg-gray-50 p-6 rounded-lg text-left">
          <h4 className="text-xl font-bold mb-4 text-center">Lista de Materiais do Kit Escolar</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                5 lápis preto nº 2
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                2 borrachas brancas
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                2 colas brancas 40g
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                1 tesoura sem ponta
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                1 caixa de lápis de cor
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                1 apontador c/ depósito
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                5 cadernos brochura 96 fls
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                3 cadernos de aritmética 96 fls
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                2 cadernos de desenho 40 fls
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                2 cadernos de caligrafia 40 fls
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4">Juntos Fazemos a Diferença!</h4>
          <p className="mb-6 text-lg">
            Caso queira ajudar é só entrar em contato conosco. Saiba que você pode contribuir com qualquer valor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              <Link href="/doacoes">Fazer Doação</Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold">
              <Link href="/contato">Entrar em Contato</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}