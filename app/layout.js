import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shutter Bloom",
  description: "A captivating photo gallery showcasing breathtaking moments from around the world. Explore beautifully curated images, artfully captured by passionate photographers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div class="container my-4 lg:my-8">
          {children}
        </div>
        
        <div id="modal-root-content"/>
      </body>
    </html>
  );
}
