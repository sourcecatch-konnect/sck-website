import { Open_Sans, Passion_One } from "next/font/google";
import "./globals.css";
import PageTransition from "./(client)/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const passionOne = Passion_One({
  variable: "--font-passion-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://sckonnect.com"),
  title:
    "SourceCatch Konnect Private Limited | Digital Marketing, Branding & Web Development",
  description:
    "SourceCatch Konnect Pvt. Ltd. empowers brands with digital marketing, SEO, web development, and branding solutions designed for measurable growth.",
  keywords: [
    "digital marketing agency",
    "branding services",
    "SEO company",
    "web development",
    "social media marketing",
    "SourceCatch Konnect",
  ],
  authors: [{ name: "SourceCatch Konnect Private Limited" }],
  openGraph: {
    title:
      "SourceCatch Konnect Private Limited | Digital Marketing & Web Solutions",
    description:
      "We help businesses grow online through branding, SEO, content, and modern websites.",
    url: "https://sckonnect.com",
    siteName: "SourceCatch Konnect Pvt. Ltd.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "SourceCatch Konnect | Digital Growth Partner",
    description:
      "Digital marketing, branding, SEO, and development services for business growth.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${passionOne.variable} !overflow-x-hidden  antialiased`}
      >
        <PageTransition>{children}</PageTransition>
        {/* <SmoothCursor /> */}
        <Toaster />
      </body>
    </html>
  );
}
