import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Westpac Support | Live Chat",
  description: "Secure, fast live chat support for Westpac.",
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
      <body className="min-h-full flex flex-col bg-westpac-white text-westpac-text">
        {children}
      </body>
    </html>
  );
}
