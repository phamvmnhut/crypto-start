import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Header from './components/Header'
import AnnounceBar from './components/AnnounceBar'


export const metadata: Metadata = {
  title: {
    default: "Crypto Start",
    template: `%s | Crypto Start`,
  },
  description: 'Nơi bắt đầu cho sự nghiệp crypto của bạn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <AnnounceBar />
        <Header />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
