# Ilham's Portfolio

A modern, responsive personal portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles with dark mode
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   ├── resume/            # Resume download page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About section
│   └── ...               # Other sections
├── lib/                  # Utilities and data
│   ├── data.ts          # Profile information
│   ├── utils.ts         # Helper functions
│   └── seo.ts           # SEO metadata
└── public/              # Static assets
    ├── images/          # Images
    └── Ilham_Resume.pdf # Resume file
```

## 🎨 Customization

### Update Content

Edit `lib/data.ts` to update your personal information:

```typescript
export const profile = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your.email@example.com',
  // ... update other fields
}
```

### Replace Resume

1. Replace `/public/Ilham_Resume.pdf` with your actual resume
2. The download button will automatically work

### Replace Profile Image

1. Add your photo to `/public/images/`
2. Update the image path in `components/Hero.tsx`

### Customize Colors

Edit `tailwind.config.js` to change the brand colors:

```javascript
colors: {
  brand: {
    600: '#your-color', // Main brand color
    700: '#your-darker-color',
  }
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ilham-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
```

## 📱 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Mode** - Toggle with system preference detection
- ✅ **Smooth Animations** - Framer Motion with reduced motion support
- ✅ **SEO Optimized** - Meta tags, OpenGraph, sitemap, robots.txt
- ✅ **Accessible** - ARIA labels, keyboard navigation, skip links
- ✅ **Fast Loading** - Next.js optimizations, image optimization
- ✅ **Type Safe** - Full TypeScript coverage
- ✅ **Modern Stack** - Next.js 14 App Router, ES2022, ESNext modules

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (ES2022)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** shadcn/ui
- **Linting:** ESLint + Prettier
- **Deployment:** Vercel (recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Need help?** Open an issue or reach out to [ilhamkassim2003@gmail.com](mailto:ilhamkassim2003@gmail.com)
