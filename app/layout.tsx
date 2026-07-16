import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import "goey-toast/styles.css";

import { AppShell } from "@/components";
import { PRELOADER_SESSION_KEY } from "@/utils/preloader-session";

const preloaderHeadScript = `try{var k=${JSON.stringify(PRELOADER_SESSION_KEY)};if(sessionStorage.getItem(k)){document.documentElement.setAttribute("data-hide-site-preloader","");}}catch(e){}`;

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consolation Lotachi Kem | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 5+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies.",
  keywords: [
    "Consolation Lotachi Kem",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "JavaScript",
    "UI/UX",
    "frontend engineer",
    "TechieConso",
  ],
  publisher: "Consolation Lotachi Kem",
  authors: [
    { name: "Consolation Lotachi Kem", url: "https://github.com/KEM-CONSOLATION" },
  ],
  metadataBase: new URL("https://techieconso.vercel.app"),
  alternates: {
    canonical: "https://techieconso.vercel.app",
  },
  openGraph: {
    title: "Consolation Lotachi Kem | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies.",
    url: "https://techieconso.vercel.app",
    siteName: "TechieConso",
    images: [
      {
        url: "https://techieconso.vercel.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Consolation Lotachi Kem — Senior Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Techie_Conso",
    title: "Consolation Lotachi Kem | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies.",
    creator: "@Techie_Conso",
    images: [
      {
        url: "https://techieconso.vercel.app/thumbnail.jpg",
        alt: "Consolation Lotachi Kem — Senior Frontend Engineer",
      },
    ],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://techieconso.vercel.app/#website",
      url: "https://techieconso.vercel.app",
      name: "Consolation Lotachi Kem",
      alternateName: ["TechieConso", "KEM-CONSOLATION"],
      description:
        "Senior Frontend Engineer building scalable, high-performance web applications with React, Next.js, and TypeScript.",
      publisher: { "@id": "https://techieconso.vercel.app/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://techieconso.vercel.app/#person",
      name: "Consolation Lotachi Kem",
      alternateName: "TechieConso",
      url: "https://techieconso.vercel.app",
      jobTitle: "Senior Frontend Engineer",
      description:
        "Senior Frontend Engineer with 5+ years of experience building scalable web applications with React, Next.js, and TypeScript.",
      image: "https://techieconso.vercel.app/thumbnail.jpg",
      sameAs: [
        "https://github.com/KEM-CONSOLATION",
        "https://ng.linkedin.com/in/kem-consolation",
        "https://x.com/Techie_Conso",
        "https://www.youtube.com/@TechieConso",
        "https://www.instagram.com/techie_conso/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderHeadScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${hankenGrotesk.className} overflow-y-scroll transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
