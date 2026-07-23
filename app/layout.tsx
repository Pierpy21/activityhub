import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Nome in PascalCase e path standard con @/
import BottomNav from "./components/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISV DePaul Leader App",
  description: "Activity Leader Management App for DePaul University ISV 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100">
        {/* Contenuto della pagina */}
        <div className="flex-1">
          {children}
        </div>

        {/* 2. Componente React invocato con la lettera MAIUSCOLA */}
        <BottomNav />
      </body>
    </html>
  );
}