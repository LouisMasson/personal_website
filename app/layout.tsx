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
    siteName: 'Louis Masson Portfolio',
    title: 'Louis Masson - Tech Innovation & Business Development',
    description: 'Account Manager at Devoteam Luxembourg specialized in cloud, data, and AI solutions. Passionate about tech innovation and business development.',
    images: [
      {
        url: '/avatar.jpeg',
        width: 800,
        height: 600,
        alt: 'Louis Masson Profile',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louis Masson - Tech Innovation & Business Development',
    description: 'Account Manager at Devoteam Luxembourg specialized in cloud, data, and AI solutions.',
    images: ['/avatar.jpeg'],
    creator: '@Lmasson04pro',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖥️</text></svg>'
  }
}