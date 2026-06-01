import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HSBC Support | Live Chat",
  description: "Secure, fast live chat support for HSBC.",
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
      <body className="min-h-full flex flex-col bg-hsbc-white text-hsbc-text">
        {children}
      </body>
    </html>
  );
}
