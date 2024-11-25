import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Unlimited Beats | Professional Beat Making Services',
    template: '%s | Unlimited Beats',
  },
  description:
    'Professional beat making services offering unlimited beats, custom productions, and exclusive rights. Fast delivery and high-quality music production.',
  keywords: [
    'beats',
    'music production',
    'beat making',
    'unlimited beats',
    'custom beats',
    'professional beats',
    'music producer',
    'buy beats online',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Unlimited Beats',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/unlimited_beats_favicon.ico',
    shortcut: '/unlimited_beats_favicon.ico',
    apple: '/unlimited_beats_favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/unlimited_beats_favicon.ico',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Unlimited Beats',
    title: 'Unlimited Beats | Professional Beat Making Services',
    description:
      'Professional beat making services offering unlimited beats, custom productions, and exclusive rights. Fast delivery and high-quality music production.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Unlimited Beats - Professional Music Production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlimited Beats | Professional Beat Making Services',
    description:
      'Professional beat making services offering unlimited beats, custom productions, and exclusive rights.',
    images: ['/og-image.jpg'], // Same image as OpenGraph
    creator: '@yourtwitter', // Your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
