"use client";
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation";
import "./globals.css";
import Footer from "@/components/user/Footer";
import React, { useState } from "react";
import Navbar from "@/components/user/Navbar";
import { SearchContext } from "@/components/user/SearchContext";



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
  

 const pathname = usePathname()??"";

  const hideLayoutOn = ["/Login", "/signup", "/verify"]; 

  const hideLayout = hideLayoutOn.includes(pathname);
 const [search, setSearch] = useState('');
  return (
    <html lang="en" >
      <body
        className={inter.variable} >
         
          <SearchContext.Provider value={{ search, setSearch }}>
        
 {!hideLayout && <Navbar/>}
      <main>{children}</main>
      
        {!hideLayout && <Footer />}
        </SearchContext.Provider>
      
      </body>
    </html>
  );
}
