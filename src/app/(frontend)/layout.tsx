import type { Metadata } from "next";
// import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import "./globals.css";
import TopBar from "@/components/layout/top-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster } from 'sonner';


// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"]
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "BMUS - Best Medical University Services",
    template: "%s | BMUS",
  },
  description: "BMUS is a platform that provides affordable and quality medical services to students from all over the world.",
  keywords: [
    "bmus",
    "best medical university services",
    "medical services",
    "medical school",
    "medical university",
    "medical college",
    "bmus medical services",
    "bmus medical school",
    "bmus medical university",
    "bmus medical college",
    "study abroad",
    "study abroad programs",
    "study abroad opportunities",
    "study abroad destinations",
    "study abroad countries",
    "study abroad programs",
    "study abroad opportunities",
    "study abroad destinations",
    "study abroad countries",
    "study abroad mbbs",
    "mbbs",
  ],
  // twitter: {
  //   card: "summary_large_image",
  //   creator: "@itsajaygaur",
  //   title: "Ajay Gaur",
  //   description: "Personal portfolio website of Ajay Gaur built with Next.js",
  //   images: [`${process.env.NEXT_PUBLIC_BASE_URL!}/opengraph-image.png`],
  // },
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
  authors: [
    {
      name: "Vishnu Sharma",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
  ],
  creator: "Vishnu Sharma",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster richColors />
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>

  );
}
