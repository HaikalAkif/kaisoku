import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Script from "next/script";
import LenisProvider from "@/components/LenisProvider";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const brandFont = localFont({
  src: "../../public/fonts/Gibed.ttf",
  variable: "--font-brand",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaisoku.com'),
  title: {
    default: "Kaisoku - Transform Your Business with Powerful SaaS Solutions",
    template: "%s | Kaisoku"
  },
  description: "Streamline your workflow, boost productivity, and scale effortlessly with Kaisoku's innovative SaaS platform. Trusted by 1,000+ companies worldwide.",
  keywords: ["SaaS", "business automation", "workflow management", "productivity tools", "business software", "enterprise solutions"],
  authors: [{ name: "Kaisoku Team" }],
  creator: "Kaisoku",
  publisher: "Kaisoku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaisoku.com",
    siteName: "Kaisoku",
    title: "Kaisoku - Transform Your Business with Powerful SaaS Solutions",
    description: "Streamline your workflow, boost productivity, and scale effortlessly with Kaisoku's innovative SaaS platform.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kaisoku - SaaS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaisoku - Transform Your Business with Powerful SaaS Solutions",
    description: "Streamline your workflow, boost productivity, and scale effortlessly with Kaisoku's innovative SaaS platform.",
    images: ["/og-image.jpg"],
    creator: "@kaisoku",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://kaisoku.com",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${brandFont.variable} antialiased`}>
        <StructuredData />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
