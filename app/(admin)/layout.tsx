import '../globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/Header'


export const metadata: Metadata = {
  title: {
    default: "Crypto Start | Admin",
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
      <body className="dark:bg-slate-800 max-h-screen">
        <Header />
        <main className='h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
