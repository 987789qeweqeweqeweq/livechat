import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNZ Support | Live Chat",
  description: "Secure, fast live chat support for BNZ.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bnz-white text-bnz-text">
        {children}
      </body>
    </html>
  );
}
