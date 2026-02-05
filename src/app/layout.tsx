import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default:
      "Best Medical University Services | MBBS Abroad Consultants in palwal, Haryana, India",
    template: "%s | BMUS",
  },
  description:
    "BMUS helps Indian students get MBBS admission abroad in NMC & WHO approved medical universities. Low fees, expert counseling, visa support & post-arrival assistance.",
  keywords: [
    "MBBS abroad",
    "MBBS admission abroad",
    "BMUS",
    "medical education overseas",
    "MBBS consultants India",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
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
  authors: [
    {
      name: "Vishnu Sharma",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
  ],
  creator: "Vishnu Sharma",
  verification: {
    google: "OpuWSCFg0VMWYTP3hsiLF20EDpge8fS4LJzexVm_B5k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-N0WSHRHRP7" />
      <body
        className={`${geistSans.className} ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
