import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'AI Keyword Extractor',
  description: 'AI Keyword Extractor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-blue-700 text-white">
        <Header />

        <main className="max-w-7xl mx-auto min-h-screen">
          {children}

          
        </main>
        
        <Footer className="" />
      </body>
    </html>
  )
}
