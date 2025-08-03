import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "'NepTrade - Nepal\'s Premier B2B Marketplace'",
  description: "'Connect with verified suppliers and buyers in Nepal. Your gateway to quality products and trusted business relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
     
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        {children}
      </body>
    </html>
  );
}
