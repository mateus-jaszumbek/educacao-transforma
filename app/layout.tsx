import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Educação que Transforma",
  description: "Explore seu potencial com aprendizado transformador.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800">
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

        {/* FOOTER */}
        <footer
          className="h-84 relative text-center text-sm text-gray-700 flex items-center justify-center py-8 sm:py-12"
          style={{ backgroundImage: "url('/img/lapis.png')" }}
        >
          <div className="absolute inset-0 bg-white/70" />
          <div className="relative z-10 text-black px-4">
            © 2024 Educação que Transforma
          </div>
        </footer>
      </body>
    </html>
  );
}
