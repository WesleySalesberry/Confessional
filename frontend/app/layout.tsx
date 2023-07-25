import React from "react"
import SearchContextProvider from '@/app/context/SearchContextProvider'
import './globals.css'
import type { Metadata } from 'next'
import UpdateContextProvider from '@/context/UpdateProvider'
import ModeContextProvider from "@/context/ModeContextProvider"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Confessional',
  description: 'An untraceable and untractable place to express your thoughts',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SearchContextProvider>
        <UpdateContextProvider>
          <ModeContextProvider>
            <body>{children}</body>
          </ModeContextProvider>
          <ModeContextProvider>
            <body>{children}</body>
          </ModeContextProvider>
        </UpdateContextProvider>
      </SearchContextProvider>
    </html>
  )
}
