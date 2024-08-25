import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FNK Notebook",
  description: "FNK Notebook , Notion but better .",
  icons : {
    icon : [
      {
        media : "(prefers-color-scheme : dark)",
        url : "/svgWhite.svg",
        href : "/svgWhite.svg"
      },
      {
        media : "(prefers-color-scheme : light)",
        url : "/svgBlack.svg",
        href : "/svgBlack.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
