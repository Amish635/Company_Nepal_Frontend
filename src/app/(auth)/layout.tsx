
import type { Metadata } from 'next';
import Navbar from "@/app/components/layout/Header/Navbar";
import Footer from "@/app/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: 'Login | Company Nepal',
  description: 'Secure login portal for Company Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
