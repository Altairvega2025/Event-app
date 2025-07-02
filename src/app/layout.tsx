"use client";
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation";


import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

 const pathname = usePathname();

  const hideLayoutOn = ["/Login", "/signup", "/verify"]; // Add more routes to hide layout

  const hideLayout = hideLayoutOn.includes(pathname);



  
  return (
    <html lang="en" >
      <body
        className={inter.variable} >
       
        {!hideLayout && <Navbar  />}
        <main>{children}</main>
        {!hideLayout && <Footer />}
        
      </body>
    </html>
  );
}
