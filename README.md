# Portfolio Website

A modern, minimalist portfolio website built with Next.js and Tailwind CSS.

## Features

- ✨ Clean, minimalist design
- 📱 Fully responsive layout
- 🌓 Dark mode support (automatic based on system preferences)
- ⚡ Fast performance with Next.js
- 🎨 Styled with Tailwind CSS
- 📝 Easy to customize

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization Guide

### 1. Update Your Information

Edit the following files to add your personal information:

**`components/Hero.tsx`**

- Update the title, description, and about text
- Customize the call-to-action buttons

**`components/Skills.tsx`**

- Replace the skills array with your own skills
- Organize them into relevant categories

**`components/Projects.tsx`**

- Replace placeholder projects with your actual projects
- Add project descriptions, tech stacks, and links

**`components/Contact.tsx`**

- Update email address
- Add your LinkedIn and GitHub profile URLs
- Add any additional social media links

**`app/layout.tsx`**

- Update the page title and description for SEO

### 2. Styling Customization

The site uses Tailwind CSS for styling. You can customize:

**Colors:** Edit `tailwind.config.ts` to change the color scheme
**Fonts:** Update `app/globals.css` to use custom fonts
**Spacing & Layout:** Adjust Tailwind classes in component files

### 3. Adding New Sections

To add a new section:

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update the navigation in `components/Header.tsx`

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended for Next.js): [vercel.com](https://vercel.com)
- **Netlify:** [netlify.com](https://netlify.com)
- **GitHub Pages:** Requires additional configuration
- **AWS/DigitalOcean:** For self-hosting

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero/About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects showcase
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
└── README.md           # This file
```

## Next Steps

1. **Customize your information** in all components
2. **Add screenshots/demos** of your projects
3. **Deploy** your portfolio to make it live
4. **Keep updating** as you build more projects

## License

This project is open source and available under the MIT License.
