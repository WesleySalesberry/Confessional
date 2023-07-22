import React from "react"
import SearchContextProvider from '@/context/SearchContextProvider'
import './globals.css'
import type { Metadata } from 'next'
import UpdateContextProvider from '@/context/UpdateProvider'
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
          <body>{children}</body>
        </UpdateContextProvider>
      </SearchContextProvider>
    </html>
  )
}
