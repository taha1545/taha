import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#180e08",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Taha Mansouri",
  description:
    "Portfolio of Taha Mohamed Mansouri. Network & Cloud Engineer with backend development expertise. Building resilient infrastructure and scalable systems.",
  keywords: [
    "Taha Mohamed Mansouri",
    "Cloud Engineer",
    "Network Engineer",
    "Backend Developer",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Taha Mohamed Mansouri" }],
  openGraph: {
    title: "Taha Mohamed Mansouri — Cloud & Network Engineer",
    description:
      "Network & Cloud Engineer with backend development expertise. Building resilient infrastructure and scalable systems.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Mohamed Mansouri",
    description: "Cloud & Network Engineer. Backend Developer.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}