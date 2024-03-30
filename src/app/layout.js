import { Inter } from 'next/font/google'
import './globals.css'
import PersonalIcon from "./JS Icon.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Sullivan',
  description: 'A portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-800  text-[#87AED4]"}>{children}</body>
    </html>
  )
}
