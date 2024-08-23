import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

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
        <div className="container my-4 lg:my-8">
          {children}
          <div id="modal-root-content" />
          <Toaster />
        </div>
      </body>
    </html>
  );
}