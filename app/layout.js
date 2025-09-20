import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food & Bev CFO | Restaurant Accounting Services',
  description: 'Expert accounting services for restaurants, bars, and food service businesses. We help you streamline finances and maximize profits.',
  keywords: 'restaurant accounting, restaurant CFO, food service bookkeeping, bar accounting',
  openGraph: {
    title: 'Food & Bev CFO | Restaurant Accounting Services',
    description: 'Expert accounting services for restaurants, bars, and food service businesses.',
    url: 'https://foodandbevcfo.com',
    siteName: 'Food & Bev CFO',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}