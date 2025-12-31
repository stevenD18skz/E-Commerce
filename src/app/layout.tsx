import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//COMPONETS IMPORT
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import { CurrencyProvider } from "../context/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "casaModerna",
  description: "e-commerce to casaModerna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyProvider>
          <NavBar />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
