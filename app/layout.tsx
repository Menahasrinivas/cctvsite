import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Riyaz CCTV | CCTV Installation in Chennai",
  description:
    "Professional CCTV installation and security systems in Chennai for homes, shops and offices.",
  keywords: ["CCTV Chennai", "CCTV Installation", "Security Camera"],
  openGraph: {
    title: "Riyaz CCTV Chennai",
    description: "Affordable CCTV installation services",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
