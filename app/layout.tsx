import type { Metadata } from "next";
import "./globals.css";
import { Anton } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

//
export const metadata: Metadata = {
  title: "Azandr",
  description: "Azandr - Official Website",
};

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} dark`}>
      <body className="text-[#e3e4d8]">
        <PageTransition>
          <main className="relative min-h-svh w-full bg-[#121212] z-0">
            <Nav />
            {children}
            <Footer />
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
