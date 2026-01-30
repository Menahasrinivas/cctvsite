export const metadata = {
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

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

export default function RootLayout({ children }) {
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
