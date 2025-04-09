# Modern Developer Portfolio

A visually stunning and interactive portfolio website built with Next.js, featuring smooth animations, modern design, and responsive layouts. This portfolio showcases skills, projects, work experience, and contact information in an engaging way.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with engaging animations and transitions
- **Responsive Layout**: Fully responsive for all device sizes from mobile to desktop
- **Interactive Elements**: Animated text, particles, floating badges, and interactive cards
- **Project Showcase**: Beautiful project cards with live demo and code links
- **Skills Visualization**: Categorized skill cards with icons and interactive elements
- **Contact Form**: Functional contact form with validation and email integration
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Ready**: Properly structured for search engine optimization

## 🚀 Technologies Used

### Frontend

- **Next.js 15** - React framework with server-side rendering
- **React 19** - JavaScript library for building user interfaces
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lenis** - Smooth scroll library
- **Prism.js** - Syntax highlighting for code snippets
- **React Icons** - Icon library

### UI Components

- Custom animated components (Meteors, Sparkles, Flip Words)
- Interactive cards with hover effects
- SVG animations and patterns
- Custom loading indicators

### Development Tools

- ESLint - Code linting
- TurboRepo - Monorepo management

## 🛠️ Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tahmid-kabir-addin/Tahmid-Kabir-Portfolio
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── assets/           # Static assets (CSS, images)
│   ├── components/       # Reusable UI components
│   ├── contact/          # Contact page with form
│   ├── education/        # Education section
│   ├── experience/       # Work experience section
│   ├── lib/              # Utility functions and helpers
│   ├── projects/         # Projects showcase
│   ├── skills/           # Skills and expertise section
│   ├── layout.js         # Root layout component
│   ├── page.js           # Home page
│   └── globals.css       # Global styles
├── public/               # Public assets
└── package.json          # Project dependencies
```

## 🧩 Key Components

- **Home Hero Section**: Dynamic header with animated text, code snippet, and floating badges
- **Skills Section**: Interactive cards showing technical skills by category
- **Projects Section**: Scrollable project cards with details and links
- **Experience Section**: Timeline of work history with achievements
- **Contact Form**: Form with validation, loading state, and email integration

## 🔧 Customization

To personalize this portfolio:

1. Update personal details in `app/page.js`
2. Modify the skills in `app/skills/page.jsx`
3. Edit projects in `app/projects/page.js`
4. Update work experience in `app/experience/page.js`
5. Customize contact information in `app/contact/page.js`

## 📱 Contact Form Setup

The contact form uses Web3Forms to send emails:

1. Sign up at [Web3Forms](https://web3forms.com/) to get your access key
2. Add your access key to the `.env.local` file
3. Customize the recipient email in the contact form component

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs and interactive websites
- Thanks to the Next.js team for the amazing framework
- All the open-source libraries that made this project possible

---
