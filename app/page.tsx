// app/page.tsx
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <section className="flex flex-col items-center text-center p-10 space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="max-w-md text-left">
          <h2 className="text-6xl font-bold mb-4">Educação</h2>
          <h2 className="text-6xl font-bold mb-4">que</h2>
          <h2 className="text-6xl font-bold mb-4">Transforma</h2>
          <p className="text-gray-600 mb-6">          
            Explore seu potencial com as nossas ferramentas de aprendizado.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            <Link href="/contato">Saiba mais</Link>
          </button>
        </div>

        <div className="relative ">
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

      {/* Seção "Sobre Nós" */}
      <div className="text-center max-w-3xl mt-16">
        <h3 className="text-3xl font-bold mb-4">Sobre Nós</h3>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Missão", icon: "🎓" },
            { title: "Visão", icon: "💡" },
            { title: "Valores", icon: "📖" },
          ].map(({ title, icon }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-gray-500 text-sm text-center mt-2">
                Lorem ipsum dolor sit amet, consectetur adic.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}