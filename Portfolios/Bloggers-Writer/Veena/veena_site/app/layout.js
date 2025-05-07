// app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Veena Mishra - Writer & Blogger",
  description: "Demo blog and portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="--font-main">
      
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
