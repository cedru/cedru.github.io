import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebas = Bebas_Neue({ subsets: ["latin"] , weight: ["400"]});

export const metadata: Metadata = {
  title: "Silent Hawks E-Sports Team",
  description: "Made by Sander Karol Avarand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebas.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
