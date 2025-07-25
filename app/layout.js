import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import AdvancedAnalytics from "./components/AdvancedAnalytics";
import PerformanceMonitor from "./components/PerformanceMonitor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tahmid Kabir | Software Engineer",
  description: "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
  keywords: ["software engineer", "full-stack developer", "MERN stack", "web development", "portfolio"],
  authors: [{ name: "Tahmid Kabir" }],
  creator: "Tahmid Kabir",
  openGraph: {
    title: "Tahmid Kabir | Software Engineer",
    description: "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
    url: "https://tahmid-kabir.vercel.app",
    siteName: "Tahmid Kabir Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Kabir | Software Engineer",
    description: "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
    creator: "@tahmidkabir",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <AdvancedAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen relative">
          {/* Enhanced Background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]" />
            <div className="absolute inset-0 grid-background opacity-30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          {children}
          <PerformanceMonitor />
        </main>
      </body>
    </html>
  );
}
