import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miguel Ayala Montoya',
  description: 'Miguel Ayala Montoya',
  generator: 'Miguel Ayala Montoya',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
