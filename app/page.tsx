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
            Unindo forças, podemos contribuir para o desenvolvimento de 
            crianças e adolescentes em situação de vulnerabilidade socioeconômica.
            Com sua contribuição, mais de 350 crianças e adolescentes
            terão a oportunidade de uma educação mais digna.
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
          <strong>Educação que Transforma: Transformando vidas por meio da educação.</strong>
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Projeto social que atua em São José dos Pinhais - PR, oferecendo apoio a crianças 
          e adolescentes em situação de vulnerabilidade com doação de materiais escolares.
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Fundado em 2016, o <strong>Educação que Transforma</strong> é um projeto social que tem como 
          objetivo a arrecadação de fundos para compra e distribuição de materiais escolares 
          a comunidades em situação de vulnerabilidade econômica e social. A iniciativa, 
          criada por Jackson Mendes, curitibano, conta com o apoio de voluntários para 
          ganhar visibilidade e conseguir atender crianças e adolescentes da comunidade 
          do bairro Independência, em São José dos Pinhais - PR.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md my-6 border-l-4 border-orange-500">
          <blockquote className="text-gray-700 italic text-lg">
            "Escolhi o caminho da educação por entender que ela é a base de tudo e que, 
            com o acesso à ela, as pessoas podem conquistar mais espaço e ter uma vida digna. 
            Mas, para uma grande massa da população, esse acesso é comprometido pela falta 
            do mínimo: sim, existem MUITAS crianças que não vão à escola porque falta o básico 
            (caderno, lápis, borracha, mochila)."
            <footer className="mt-4 text-gray-600 font-semibold">- Jackson Mendes, Fundador</footer>
          </blockquote>
        </div>

        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Atualmente, o projeto já ajudou mais de <strong>350 crianças e adolescentes</strong> em idade 
          escolar ao longo das <strong>8 edições</strong> já realizadas e prevê um crescimento anual. 
          Nosso objetivo é atender mais de <strong>450 crianças</strong>. Os kits têm valor médio de 
          <strong> R$ 50,00 (cinquenta reais)</strong> e você pode ajudar doando qualquer valor ou 
          divulgando o projeto em suas redes sociais, família e amigos.
        </p>
        
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          As doações estarão abertas até o dia <strong>31 de janeiro de 2026</strong>. Com sua ajuda 
          conseguimos transformar vidas. O Educação que Transforma continua lutando por uma 
          educação mais digna para todos, acreditando que a educação é a chave para uma vida melhor.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-4 text-green-600">8ª Edição - 2025</h4>
          <p className="text-gray-600 mb-2">
            Arrecadações abertas para a compra de material escolar do ano letivo
          </p>
          <p className="text-gray-500 text-sm">
            Meta: Atender 450 crianças e adolescentes
          </p>
        </div>
      </div>

      {/* Seção Como Ajudar */}
      <div className="text-center max-w-4xl mt-8">
        <h3 className="text-3xl font-bold mb-6">Como Você Pode Ajudar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="font-bold text-lg mb-2">Doação em Dinheiro</h4>
            <p className="text-gray-600 text-sm">
              Valor médio de cada kit é de <strong>R$ 50,00</strong>. 
              Você pode contribuir doando o valor de um ou mais kits.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">📢</div>
            <h4 className="font-bold text-lg mb-2">Divulgação</h4>
            <p className="text-gray-600 text-sm">
              Compartilhe o projeto em suas redes sociais e ajude a alcançar mais pessoas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🎒</div>
            <h4 className="font-bold text-lg mb-2">Doação de Materiais</h4>
            <p className="text-gray-600 text-sm">
              Doe os materiais diretamente. Entre em contato para saber a lista completa.
            </p>
          </div>
        </div>

        // app/page.tsx - Apenas a seção de kits atualizada
{/* Lista de Materiais */}
<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
  <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Kit Ensino Médio (1º ao 3º ano)
  </h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <ul className="space-y-3">
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x cadernos 10 matérias</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x cadernos de aritmética grande (quadriculado)</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>1 x apontador com depósito</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>3 x borrachas brancas</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x cadernos de desenho grande</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x colas brancas 40g</span>
      </li>
    </ul>
    
    <ul className="space-y-3">
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>1 x régua 30 cm</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>1 x caixa de lápis de cor</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>5 x lápis preto</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>1 x tesoura sem ponta</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x canetas pretas</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 font-bold">•</span>
        <span>2 x canetas azuis</span>
      </li>
    </ul>
  </div>

  {/* Informações sobre estojo e mochila */}
  <div className="bg-blue-50 p-4 rounded-lg mb-6">
    <p className="text-blue-800 font-semibold text-center">
      🎒 Todos os kits vão com estojo e sacochila de TNT preta ou Lona reutilizável
    </p>
  </div>

  {/* Seção sobre igualdade e uniformidade */}
  <div className="space-y-4 text-gray-700">
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
        <span className="text-purple-500 mr-2">🎯</span>
        Diretrizes de Uniformidade
      </h5>
      <p className="mb-3">
        <strong>Os materiais utilizados devem ter aparência neutra</strong>, evitando o uso de itens com 
        personagens, estampas chamativas ou cores muito contrastantes. É importante que 
        todos os materiais sigam o mesmo padrão visual, mantendo igualdade e uniformidade 
        entre eles.
      </p>
    </div>

    <div className="bg-green-50 p-4 rounded-lg">
      <h5 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
        <span className="text-green-500 mr-2">⚖️</span>
        Promovendo a Igualdade
      </h5>
      <p>
        <strong>Buscamos promover o valor da igualdade entre os estudantes.</strong> 
        Por isso, é importante que todos utilizem materiais semelhantes, evitando distinções 
        que possam gerar comparações ou sentimentos de diferença.
      </p>
    </div>
  </div>
</div>

        {/* Call to Action Final */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4">Juntos Fazemos a Diferença!</h4>
          <p className="mb-6 text-lg">
            Sua contribuição, seja financeira ou através da divulgação, é fundamental 
            para continuarmos transformando vidas através da educação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold shadow-md">
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