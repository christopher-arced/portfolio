import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Arce | Software Engineer",
  description: "Portfolio of Christopher Arce - Software Engineer with 4+ years of experience specializing in frontend development with React, Next.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
