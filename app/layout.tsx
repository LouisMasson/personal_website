import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
})

export const metadata = {
  title: 'Louis Masson - Personal Website',
  description: 'Tech lovers (AI lovers) and business developer',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖥️</text></svg>'
  }
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm z-10 shadow-md">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="/" className="text-black relative group">
            <span className="transition-transform duration-300 inline-block group-hover:animate-bounce">👋</span>
          </a>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#projects" className="text-black relative group">
              <span className="inline-block transition-all duration-300 group-hover:text-primary">Fun Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#experience" className="text-black relative group">
              <span className="inline-block transition-all duration-300 group-hover:text-primary">Experience</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="/resume" className="text-black relative group">
              <span className="inline-block transition-all duration-300 group-hover:text-primary">Resume</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <PlausibleProvider 
            domain="louismasson.patronusguardian.org"
            customDomain="https://analytics.patronusguardian.org"
            trackOutboundLinks={true}
            enabled={true}
          />
        )}
      </head>
      <body 
        className={`${inter.className} min-h-screen bg-background antialiased transition-colors duration-300`} 
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8 max-w-3xl mt-16">
            {children}
          </main>
          <footer className="text-center py-4 text-sm text-muted-foreground border-t">
            Made by Louis with ❤️ and Replit
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}