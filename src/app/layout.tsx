import './globals.css'
import React from 'react'
import { Header } from './components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './components/Footer'
import { Whatsapp } from './components/Whatsapp'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SM',
  description: 'Personalizados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        {children}
        <Whatsapp/>
         <Footer/>
        </body>
    </html>
  )
}
