import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import PlausibleProvider from 'next-plausible'
import { Navigation } from '@/components/navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
})

export const metadata = {
  title: 'Louis Masson - Personal Website',
  description: 'Account Manager chez Devoteam Luxembourg spécialisé en solutions cloud, data et IA. Expert en développement commercial et passionné de nouvelles technologies.',
  keywords: 'Louis Masson, Account Manager, Devoteam Luxembourg, Cloud Solutions, Data, AI, Business Development, Tech Projects, Digital Innovation, ServiceNow, Microsoft Azure, Développement Commercial',
  metadataBase: new URL('https://personalwebsite-lmasson.replit.app/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://personalwebsite-lmasson.replit.app/',
    siteName: 'Louis Masson',
    title: 'Louis Masson - Tech Innovation & Business Development',
    description: 'Account Manager at Devoteam Luxembourg specializing in cloud solutions, data, and AI. Expert in business development and passionate about new technologies.',
    images: [
      {
        url: 'https://personalwebsite-lmasson.replit.app/avatar.jpeg',
        width: 800,
        height: 600,
        alt: 'Louis Masson Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louis Masson - Tech Innovation & Business Development',
    description: 'Account Manager at Devoteam Luxembourg specializing in cloud solutions, data, and AI.',
    images: ['https://personalwebsite-lmasson.replit.app/avatar.jpeg'],
    creator: '@Lmasson04pro',
  },
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
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                try {
                  var s = document.createElement('script');
                  s.src = "https://app.rybbit.io/api/script.js";
                  s.setAttribute('data-site-id', "120");
                  s.defer = true;
                  s.onerror = function(err) { 
                    console.log('Analytics load error:', err);
                  };
                  document.head.appendChild(s);
                } catch (e) {
                  console.log('Analytics initialization error:', e);
                }
              });
            `
          }}
        />
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