import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citi | Live Chat Support",
  description: "Secure live chat support for Citi customers.",
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
      <body className="min-h-full flex flex-col bg-citi-gray-bg text-citi-text">
        {children}
      </body>
    </html>
  );
}
