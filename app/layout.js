import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shutter Bloom",
  description: "A captivating photo gallery showcasing breathtaking moments from around the world. Explore beautifully curated images, artfully captured by passionate photographers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
