import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbaar from './components/Navbar'
import clsx from 'clsx'
import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from '@clerk/nextjs/app-beta'
import Hydrate from './components/Hydrate'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce-Nextjs',
  description: 'Ecommerce-Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Hydrate>
            <Navbaar />
            <main className=' 
            h-screen p-16'>
              {children}
            </main>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  )
}
