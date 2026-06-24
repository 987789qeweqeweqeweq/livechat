"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-westpac-white">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* ── Hero Banner ── */}
        <div className="w-full bg-westpac-red">
          <div className="w-full max-w-[1200px] mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left: Hero copy */}
            <div className="flex-1 text-white min-w-0">
              {/* Kicker */}
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
                {loading ? "Westpac" : regionData.brandName} &nbsp;·&nbsp; Customer Support
              </p>

              {/* Headline */}
              <h1 className="text-[46px] md:text-[58px] lg:text-[66px] font-black uppercase leading-[0.95] tracking-tight mb-7">
                NEED HELP<br />
                WITH YOUR<br />
                <span className="text-white/85">ACCOUNT?</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[17px] text-white/80 mb-10 leading-relaxed font-normal max-w-[460px]">
                {loading
                  ? "Loading your local support details..."
                  : regionData.heroSubtitle}{" "}
                Get real-time assistance via secure live chat directly on your device.
              </p>

              {/* Bullet features */}
              <ul className="space-y-3.5">
                {[
                  "Bank-grade end-to-end encryption",
                  "Connect to a specialist in seconds",
                  "Available 24/7 for personal and business banking",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-[10px] h-[10px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[15px] text-white/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Action card */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-westpac-white rounded-[4px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.28)]">
                {/* Navy accent strip */}
                <div className="h-[5px] bg-westpac-navy" />

                <div className="px-8 py-9 md:px-10 md:py-10">
                  <h2 className="text-[22px] font-bold text-westpac-navy mb-2 leading-snug">
                    Start your session
                  </h2>
                  <p className="text-westpac-text-muted text-[14px] mb-8 leading-relaxed">
                    Click below to launch a secure live chat. A temporary connection utility will link you with a Westpac specialist.
                  </p>

                  <SmartDownloader />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full bg-westpac-footer-bg border-t border-westpac-border pt-10 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-westpac-border/70 pb-6 mb-6 gap-4">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
              {[
                { label: "About Westpac", href: "https://www.westpac.com.au/about-westpac/" },
                { label: "Site map",       href: "https://www.westpac.com.au/sitemap/" },
                { label: "Privacy",        href: "https://www.westpac.com.au/privacy/" },
                { label: "Security",       href: "https://www.westpac.com.au/security/" },
                { label: "Accessibility",  href: "https://www.westpac.com.au/accessibility/" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-westpac-navy hover:text-westpac-red hover:underline transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={loading ? "#" : regionData.termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-westpac-navy hover:text-westpac-red hover:underline transition-colors"
              >
                Terms and conditions
              </a>
            </nav>
          </div>

          <p className="text-westpac-text-muted text-[12px] leading-relaxed">
            © {new Date().getFullYear()}{" "}
            {loading ? "Westpac Banking Corporation" : regionData.legalEntityName}. All rights
            reserved. Westpac Banking Corporation ABN 33 007 457 141 AFSL and Australian credit
            licence 233714. Your use of this website is subject to the terms and conditions
            governing it. Please read these terms and conditions before using the website.
          </p>
        </div>
      </footer>
    </div>
  );
}
