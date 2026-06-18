import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tri Counties Bank | Live Chat Support",
  description: "Secure live chat support for Tri Counties Bank customers.",
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
      <head>
        {/* Google Fonts — Lato is TCBK's fallback for Canada Type Gibson */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" />
        {/* Adobe Typekit — Canada Type Gibson (activates once domain is whitelisted) */}
        <link rel="stylesheet" href="https://use.typekit.net/ckx2rni.css" />
      </head>
      <body className="min-h-full flex flex-col bg-tcbk-white text-tcbk-text">
        {children}
      </body>
    </html>
  );
}
