# Personal Website - Nathan Suh

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean design perfect for showcasing your work and thoughts.

## ✨ Features

- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dark Mode**: Automatic system preference detection with manual toggle
- **Smooth Animations**: Framer Motion powered interactions
- **Project Showcase**: Interactive 3D flip cards for your work
- **Blog System**: Ready for MDX blog posts (expandable)
- **Music Integration**: Spotify "Now Playing" widget (configurable)
- **Contact Form**: Ready for integration with form services
- **Navigation**: Smooth scroll with dot navigation
- **SEO Ready**: Proper meta tags and structure

## 🚀 Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open http://localhost:3000** to see your website

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── api/spotify/       # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── HeroBanner.tsx     # Hero section
│   ├── WorkSection.tsx    # Projects showcase
│   ├── ThoughtStream.tsx  # Blog posts
│   └── ...
├── data/thoughts/         # Blog posts (Markdown)
└── public/               # Static assets
```

## 🎨 Customization

### 1. Personal Information
Edit the content in:
- `components/HeroBanner.tsx` - Your intro and tagline
- `components/AboutSection.tsx` - About section content
- `components/WorkSection.tsx` - Your projects
- `app/layout.tsx` - Site metadata

### 2. Colors and Styling
Modify `tailwind.config.js`:
```js
colors: {
  primary: '#FFCF40',    // Your brand color
  peach: '#FF9AA2',      // Accent 1
  mint: '#B5EAD7',       // Accent 2
}
```

### 3. Blog Posts
Add new posts to `data/thoughts/` with frontmatter:
```markdown
---
title: "Your Post Title"
date: "2024-01-01"
---

Your content here...
```

### 4. Spotify Integration
To connect real Spotify data:
1. Create a Spotify app at https://developer.spotify.com
2. Add environment variables:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   ```
3. Uncomment the real API code in `app/api/spotify/route.ts`

### 5. Contact Form
The contact form is ready for integration with:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Your own API endpoint

Update the form action in `components/ContactForm.tsx`.

## 🌐 Deployment on Vercel

1. **Push your code to GitHub**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything

3. **Environment Variables (if using Spotify):**
   Add your Spotify credentials in Vercel dashboard under Settings → Environment Variables

4. **Deploy:**
   Every push to main branch will auto-deploy

Your site will be live at `https://your-project.vercel.app`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Next.js Image component for optimization
- **Fonts**: Google Fonts with `font-display: swap`

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Update the sections array in `components/DotsNav.tsx`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the existing color scheme
- Use the defined font classes: `font-heading`, `font-body`, `font-code`
- Maintain dark mode compatibility with `dark:` variants

## 🐛 Common Issues

**Build errors with Framer Motion:**
Make sure all components using Framer Motion are client components (`'use client'`)

**TypeScript errors:**
Run `npm run lint` to check for issues

**Styling not working:**
Ensure your paths are included in `tailwind.config.js` content array

## 📄 License

MIT License - feel free to use this as a template for your own site!

## 🤝 Contributing

Found a bug or want to improve something? Feel free to open an issue or submit a pull request.

---

**Happy coding!** 🚀 