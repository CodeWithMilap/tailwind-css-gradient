import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind CSS Gradient Generator - Create Beautiful Gradients with Ease",
  description: "Generate Tailwind CSS gradient class names effortlessly for stunning gradient backgrounds. Customize gradient direction and colors, then copy and paste the generated class names into your project. A handy tool to enhance your web design with beautiful gradients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
