import { Geist, Geist_Mono } from "next/font/google";
import "./assets/css/index.css";
import AdvancedAnalytics from "./components/AdvancedAnalytics";
import Header from "./components/Header";
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
  description:
    "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
  keywords: [
    "software engineer",
    "full-stack developer",
    "MERN stack",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Tahmid Kabir" }],
  creator: "Tahmid Kabir",
  openGraph: {
    title: "Tahmid Kabir | Software Engineer",
    description:
      "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
    url: "https://tahmid-kabir.vercel.app",
    siteName: "Tahmid Kabir Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Kabir | Software Engineer",
    description:
      "Portfolio of Tahmid Kabir, a Full-Stack Developer specializing in MERN stack and web technologies",
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
        <main className="min-h-screen bg-gray-900 text-white">{children}</main>
      </body>
    </html>
  );
}
