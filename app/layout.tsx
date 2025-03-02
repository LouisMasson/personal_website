import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimisation pour le chargement des polices
})

export const metadata = {
  title: 'Louis Masson - Personal Website',
  description: 'Tech lovers (AI lovers) and business developer',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖥️</text></svg>'
  }
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
          <Navigation />
          <main className="container mx-auto px-4 py-8 max-w-3xl">
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