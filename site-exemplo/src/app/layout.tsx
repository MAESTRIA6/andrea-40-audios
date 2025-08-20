import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site Exemplo',
  description: 'Landing page com animações e seções principais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className + ' bg-background text-foreground antialiased'}>
        {children}
      </body>
    </html>
  )
}

