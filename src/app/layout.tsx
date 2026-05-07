import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Abdul Mannan | Full Stack Developer",
  description: "Modern developer portfolio for Abdul Mannan - Full Stack Developer specializing in React, Next.js, and Node.js.",
  keywords: ["Abdul Mannan", "Full Stack Developer", "Next.js", "React", "Node.js", "Portfolio"],
  openGraph: {
    title: "Abdul Mannan | Full Stack Developer",
    description: "I build scalable and user-friendly web applications.",
    url: "https://example.com",
    siteName: "Abdul Mannan Portfolio",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
