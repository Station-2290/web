# Station2290 - Coffee Shop Website

A modern, responsive website for Station2290 coffee shop in Makhachkala, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light mode support
- **Typography System**: Consistent typography using shadcn/ui components
- **SEO Optimized**: Proper metadata, structured data, and sitemap generation
- **Mobile First**: Fully responsive design optimized for all devices
- **Performance**: Static generation for optimal loading speeds
- **Internationalization**: Content in Russian for local audience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Package Manager**: pnpm

## 📱 Pages

- **Home** (`/`): Hero section, features, menu preview, contact info
- **About** (`/about`): Coffee shop story, team, mission, and achievements
- **Menu** (`/menu`): Complete coffee, cocktails, and desserts menu with tabs
- **Contact** (`/contact`): Location, hours, contact info, and booking details

## 🎨 Design System

### Typography Components
- `TypographyH1` - `TypographyH4`: Heading components with consistent styling
- `TypographyP`: Paragraph with proper spacing
- `TypographyLead`: Lead text for introductions
- `TypographyBlockquote`: Styled blockquotes
- `TypographyList`: Consistent list styling
- `TypographyInlineCode`: Inline code formatting
- `TypographyLarge`, `TypographySmall`, `TypographyMuted`: Text variants

### UI Components
- Cards, Buttons, Badges
- Navigation, Tabs, Accordion
- Form elements, Dialogs, Tooltips
- And many more from shadcn/ui

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Access to station-2290 organization

### Installation

1. Clone the repository:
```bash
git clone https://github.com/station-2290/web.git
cd web
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint

# API Generation
pnpm gen:api      # Generate API types from OpenAPI schema
```

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── shared/              # Shared utilities
    └── api/             # API client and types
```

## 🎯 Business Features

### Coffee Shop Specific
- **Menu Management**: Organized by categories (coffee, cocktails, desserts)
- **Pricing Display**: Clear pricing with additional options
- **Location Info**: Address, hours, contact details
- **Team Showcase**: Staff profiles and expertise
- **Booking Info**: Table reservation details

### Technical Features
- **SEO**: Meta tags, structured data, sitemap
- **Performance**: Static generation, optimized images
- **Accessibility**: Proper semantic HTML, keyboard navigation
- **Mobile Experience**: Touch-friendly interface, responsive design

## 🌐 SEO & Analytics

- Structured data for restaurant/local business
- Proper meta tags and Open Graph
- Sitemap and robots.txt generation
- Performance optimized for Core Web Vitals

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. Connect the station-2290/web repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main

### Environment Variables

```env
# Add your environment variables here
# See .env.example for reference
```

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the established patterns
3. Run tests and linting: `pnpm lint` and `pnpm build`
4. Submit a pull request to `main` branch
5. Request review from team members

### Development Guidelines
- Follow the existing code style and patterns
- Use the established typography components
- Ensure responsive design for all screen sizes
- Test on both light and dark themes

## 📄 License

This project is proprietary software owned by station-2290 organization.

## 🔧 Troubleshooting

### Common Deployment Issues

**Error: Repository path is not under working directory**
- Fixed by using runner's workspace directory instead of absolute paths
- No longer requires custom directory permissions

**Sudo password required**
- Updated workflow to eliminate sudo requirements
- Uses user's home directory for deployment staging
- Alternative simple deployment workflow available (`deploy-simple.yml`)

**Docker permission issues**
- Ensure the runner user has Docker privileges: `sudo usermod -aG docker $USER`
- Restart Docker service if needed: `sudo systemctl restart docker`
- Log out and back in after adding user to docker group

**Build failures**
- Check Node.js version (requires 18+)
- Verify pnpm is installed: `corepack enable pnpm`
- Clear build cache if needed: `rm -rf .next node_modules && pnpm install`

### Manual Deployment

If automated deployment fails, you can deploy manually:

```bash
# SSH to your server
ssh automation@your-server

# Navigate to project directory
cd /home/automation/station2290-web

# Pull latest changes and deploy
git pull origin main
pnpm install --frozen-lockfile
pnpm run build
docker-compose down
docker-compose up -d --build
```

### Logs and Monitoring

- Deployment logs: `/var/log/deploy.log`
- Container logs: `docker-compose logs -f`
- Application logs: Check container output for runtime issues

## 📞 Support

For technical support or questions about the website:
- Create an issue in the GitHub repository
- Contact the development team via organization channels
- For urgent issues, reach out to repository maintainers

---

**Station2290** - Where tradition meets modernity in the heart of Makhachkala ☕