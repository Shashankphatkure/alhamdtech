import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alhamd Technologies - Precision Machining Solutions",
  description: "Experience the difference with Alhamd Technologies – where excellence is not just a goal, but a guarantee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
