'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "./components/landing-page/Navbar";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login'
  const isCoursePage = pathname === '/course/javascript'
  return (
    <html lang="en">
      <body>
        {[!isLoginPage, !isCoursePage] && <Navbar />}
        {children}
      </body>
    </html>
  );
}
