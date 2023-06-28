"use client"
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Docs",
  description: "at Docs, we are building the next generation of African developers",
  keywords: "Programming, content writing, Designing, Learning, Hacks, Tech, Africa, Docs, Otofast Africa, Project, Africa Fast,"
   
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
