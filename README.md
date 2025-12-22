# Abbas Ataie - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. This website showcases my work as a Software Engineer and Data Scientist, featuring project showcases, research work, mentoring services, and professional experience.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Next.js 13 App Router for optimal performance
- **SEO Optimized**: Comprehensive meta tags, structured data, and Open Graph support
- **Interactive Elements**: Smooth animations and micro-interactions using Framer Motion
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Dynamic project display with filtering capabilities
- **Research Section**: Academic work and research studies showcase
- **Mentoring Services**: Professional mentoring offerings with scheduling integration

## 🚀 Tech Stack

### Frontend

- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
ataie.me/
├── app/                    # Next.js 13 App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── mentoring/         # Mentoring services page
│   ├── research/          # Research work page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── project-showcase.tsx # Project showcase
│   └── ...               # Other components
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- Yarn or npm

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ataie.me.git
   cd ataie.me
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🎨 Customization

### Theme Configuration

The website uses a custom theme system with Tailwind CSS. You can customize colors, fonts, and other design tokens in `tailwind.config.ts`.

### Content Updates

- **Projects**: Update project data in the components
- **Personal Info**: Modify metadata in `app/layout.tsx`
- **Images**: Replace images in the `public/` directory
- **Styling**: Customize styles in `app/globals.css`

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/header.tsx`

## 📱 Pages Overview

### Home (`/`)

- Hero section with introduction
- Project showcase
- About section preview

### About (`/about`)

- Detailed personal information
- Work experience
- Skills and expertise
- Company collaborations

### Research (`/research`)

- Academic research studies
- Data science projects
- Educational technology work

### Mentoring (`/mentoring`)

- Professional mentoring services
- Session types and pricing
- Scheduling integration

### Contact (`/contact`)

- Contact form with validation
- Professional contact information
- Social media links

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://ataie.me

# Resend Email Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email addresses (optional - defaults provided)
# For testing: Use "onboarding@resend.dev" as from and your verified email as to
# For production: Verify your domain at https://resend.com/domains
RESEND_FROM_EMAIL=Contact Form <noreply@ataie.me>
RESEND_TO_EMAIL=
```

#### Email Setup Instructions

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys and create a new key
   - Add it to `.env.local` as `RESEND_API_KEY`

2. **For Testing (Free Tier):**
   - Use `onboarding@resend.dev` as the `from` address
   - Only send to verified email addresses (the email you used to sign up for Resend)
   - Set `RESEND_TO_EMAIL` to your verified email

3. **For Production:**
   - Verify your domain at [resend.com/domains](https://resend.com/domains)
   - Add DNS records as instructed by Resend
   - Update `RESEND_FROM_EMAIL` to use your verified domain (e.g., `Contact Form <noreply@ataie.me>`)
   - Once domain is verified, you can send to any email address

### SEO Configuration

SEO settings are configured in each page's metadata export and in `app/layout.tsx`. Update the following for your site:

- Site title and description
- Open Graph images
- Twitter card settings
- Structured data (JSON-LD)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `yarn build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📊 Performance

The website is optimized for performance with:

- Next.js 13 App Router for optimal loading
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts and assets
- Minimal bundle size

## 🤝 Contributing

While this is a personal portfolio, if you find any issues or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About the Developer

**Abbas Ataie** is a Software Engineer and Data Scientist with expertise in:

- Full-Stack Development
- Data Science & Machine Learning
- Cloud Architecture
- Technical Leadership
- React/Next.js Development
- Node.js Backend Development
- Python & Data Analytics
- AWS Cloud Solutions

## 🔗 Links

- **Website**: [https://ataie.me](https://ataie.me)
- **LinkedIn**: [Abbas Ataie](https://linkedin.com/in/abbas-ataie-72a4431b9)
- **GitHub**: [@abbasatayee](https://github.com/abbasatayee)
- **YouTube**: [Roshanayee](https://youtube.com/@roshanayee)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
