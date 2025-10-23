import Link from "next/link";
import './globals.css'

export const metadata = {
  title: "Educação que Transforma",
  description: "Explore seu potencial com aprendizado transformador.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800"
            cz-shortcut-listen="true">
        <header className="flex justify-between items-center p-6 shadow-sm">
          <h1 className="text-xl font-bold">Educação que Transforma</h1>
          <nav className="flex gap-6 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/doacoes">Doações</Link>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="text-center py-6 border-t text-sm text-gray-500">
          © 2024 Educação que Transforma
        </footer>
      </body>
    </html>
  );
}