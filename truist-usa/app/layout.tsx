import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truist Support | Live Chat",
  description: "Secure, fast live chat support for Truist.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-truist-white text-truist-text">
        {children}
      </body>
    </html>
  );
}
