// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-16 space-y-20">

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <div className="max-w-xl text-left">
          <h1 className="text-6xl font-bold leading-tight">
            Educação <br /> que <br /> Transforma
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Unindo forças, podemos contribuir para o desenvolvimento de crianças
            e adolescentes em situação de vulnerabilidade socioeconômica. Com sua
            contribuição, mais de <strong>350 crianças</strong> já tiveram acesso
            a uma educação mais digna.
          </p>

          <Link
            href="/doacoes"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Faça sua doação
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-6 bg-blue-600 rounded-full p-3 shadow-md">
            <Image src="/img/lampada.jpg" alt="Ideia" width={40} height={40} />
          </div>

          <Image
            src="/img/estudante.jpg"
            alt="Estudante feliz"
            width={700}
            height={500}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className="max-w-4xl bg-blue-50 p-10 rounded-3xl space-y-6">
        <h2 className="text-3xl font-bold">Sobre o Projeto</h2>

        <p className="text-lg text-gray-700">
          <strong>Educação que Transforma</strong> é um projeto social fundado em
          2016, que atua em São José dos Pinhais – PR, oferecendo apoio a crianças
          e adolescentes em situação de vulnerabilidade por meio da doação de
          materiais escolares.
        </p>

        <p className="text-lg text-gray-700">
          Criado por <strong>Jackson Mendes</strong>, o projeto já realizou
          <strong> 8 edições</strong> e impactou mais de{" "}
          <strong>350 crianças</strong>, contando com o apoio de voluntários e
          parceiros.
        </p>

        <blockquote className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 italic">
          “Escolhi o caminho da educação por entender que ela é a base de tudo.
          Muitas crianças não frequentam a escola por falta do básico.”
          <footer className="mt-4 font-semibold text-gray-600">
            — Jackson Mendes
          </footer>
        </blockquote>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            8ª Edição — 2025
          </h3>
          <p className="text-gray-600">
            Meta: atender <strong>450 crianças</strong> até{" "}
            <strong>31 de janeiro de 2026</strong>
          </p>
        </div>
      </section>

      {/* ================= COMO AJUDAR ================= */}
      <section className="max-w-5xl space-y-10">
        <h2 className="text-3xl font-bold">Como Você Pode Ajudar</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Doação em Dinheiro" icon="💰" color="orange">
            Valor médio de cada kit é <strong>R$ 50,00</strong>.
          </Card>

          <Card title="Divulgação" icon="📢" color="green">
            Compartilhe o projeto e ajude a alcançar mais pessoas.
          </Card>

          <Card title="Doação de Materiais" icon="🎒" color="blue">
            Doe materiais escolares diretamente.
          </Card>
        </div>
      </section>

      {/* ================= KITS ================= */}
      <section className="max-w-6xl space-y-12">
        <h2 className="text-3xl font-bold">Descritivo dos Kits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Kit title="Pré-Escola" color="orange">
            <li>1 caderno brochura capa dura</li>
            <li>1 apontador com depósito</li>
            <li>1 caderno de desenho</li>
            <li>1 cola branca</li>
            <li>1 giz de cera</li>
            <li>1 lápis de cor</li>
            <li>1 guache (6 cores)</li>
          </Kit>

          <Kit title="Fundamental (1º ao 4º)" color="green">
            <li>3 cadernos brochura</li>
            <li>2 cadernos de aritmética</li>
            <li>3 borrachas</li>
            <li>2 cadernos de desenho</li>
            <li>2 cadernos de caligrafia</li>
            <li>5 lápis pretos</li>
            <li>1 tesoura sem ponta</li>
          </Kit>

          <Kit title="Ensino Médio" color="blue">
            <li>2 cadernos 10 matérias</li>
            <li>2 cadernos quadriculados</li>
            <li>5 lápis pretos</li>
            <li>2 colas 40g</li>
            <li>2 canetas pretas</li>
            <li>2 canetas azuis</li>
          </Kit>
        </div>

{/* Informações sobre estojo e mochila */}
<div className="bg-blue-50 p-6 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
  <p className="text-blue-800 font-semibold text-lg">
    🎒 Todos os kits vão com estojo e sacochila de TNT preta ou lona reutilizável
  </p>
</div>

{/* Diretrizes e Igualdade */}
<div className="max-w-4xl mx-auto space-y-6">

  {/* Diretrizes de Uniformidade */}
  <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
    <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
      <span className="mr-2">🎯</span>
      Diretrizes de Uniformidade
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Os materiais utilizados devem ter <strong>aparência neutra</strong>,
      evitando o uso de itens com personagens, estampas chamativas ou cores muito
      contrastantes. É importante que todos os materiais sigam o mesmo padrão
      visual, mantendo <strong>igualdade e uniformidade</strong> entre eles.
    </p>
  </div>

  {/* Promovendo a Igualdade */}
  <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
    <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
      <span className="mr-2">⚖️</span>
      Promovendo a Igualdade
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Buscamos promover o valor da <strong>igualdade entre os estudantes</strong>.
      Por isso, é importante que todos utilizem materiais semelhantes, evitando
      distinções que possam gerar comparações ou sentimentos de diferença.
    </p>
  </div>

</div>

      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-3xl max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">
          Juntos Fazemos a Diferença
        </h2>
        <p className="mb-8 text-lg">
          Sua ajuda transforma vidas por meio da educação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/doacoes" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold">
            Fazer Doação
          </Link>
          <Link href="/contato" className="border-2 border-white px-8 py-3 rounded-xl font-semibold">
            Entrar em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTES AUXILIARES ================= */

function Card({ title, icon, color, children }: any) {
  const colors: any = {
    orange: "border-orange-500",
    green: "border-green-500",
    blue: "border-blue-500",
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${colors[color]}`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
}

function Kit({ title, color, children }: any) {
  const colors: any = {
    orange: "border-orange-500 text-orange-600",
    green: "border-green-500 text-green-600",
    blue: "border-blue-500 text-blue-600",
  };

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md border-t-4 ${colors[color]}`}>
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <ul className="text-sm text-gray-700 space-y-1">{children}</ul>
    </div>
  );
}
