# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 📱 Fully responsive
- 🎨 Modern design with Tailwind CSS
- 📝 Easy content management
- 📚 Reading list page
- ⚡ Fast performance

## Requirements

- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment with Coolify

### Prerequisites

1. A VPS with Coolify installed
2. Git repository with your portfolio code
3. Domain name (optional but recommended)

### Deployment Steps

1. Log in to your Coolify dashboard

2. Create a new service:
   - Click "New Service"
   - Select "Application"
   - Choose "Next.js" as the application type

3. Configure your application:
   - Connect your Git repository
   - Select the branch you want to deploy
   - Set build command: `npm run build`
   - Set start command: `npm start`
   - Set the port to: `3000`

4. Environment Variables:
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

5. Deploy:
   - Click "Deploy" and wait for the build to complete
   - Your application will be available at the provided Coolify URL

### Domain Setup

1. Add your domain in Coolify:
   - Go to your application settings
   - Add your domain name
   - Configure SSL certificate (Coolify handles this automatically)

2. Update your domain's DNS:
   - Add an A record pointing to your VPS IP
   - Add a CNAME record for www subdomain (if needed)

## Customization

1. Update content in `lib/content.ts`
2. Modify theme colors in `app/globals.css`
3. Add new components in `components/` directory
4. Update metadata in `app/layout.tsx`

## Content Management

### Profile Information
Edit `lib/content.ts` to update:
- Personal information
- Social media links
- Technologies
- Projects
- Reading list

### Adding New Projects
Add to the `projects` array in `lib/content.ts`:
```typescript
{
  name: "Project Name",
  description: "Project description",
  image: "https://image-url.com",
  github: "https://github.com/...",
  demo: "https://demo-url.com",
  tags: ["React", "TypeScript"]
}
```

### Updating Reading List
Modify the `books` object in `lib/content.ts`:
```typescript
{
  currentlyReading: [
    {
      title: "Book Title",
      author: "Author Name",
      description: "Book description",
      link: "https://book-url.com"
    }
  ],
  recentlyFinished: [
    // ... similar structure
  ]
}
```

## Security Best Practices

1. Keep dependencies updated:
```bash
npm audit
npm update
```

2. Use environment variables for sensitive data
3. Implement proper security headers
4. Regular backups of your content
5. Monitor application logs in Coolify

## License

MIT License - feel free to use this template for your own portfolio!