"use client";

import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

export function Header() {
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleNavClick = () => {
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 600);
  };

  const mainNavItems = ["Home", "Personal", "Business", "Corporate", "About us", "Help"];

  return (
    <header className="w-full flex flex-col relative">
      {/* Progress bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden">
          <div
            className="h-full bg-westpac-red"
            style={{ animation: "navprogress 0.6s ease-out forwards" }}
          />
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes navprogress {
          0%   { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
      ` }} />

      {/* ── Utility Bar ── */}
      <div className="w-full bg-westpac-white border-b border-westpac-border/40">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-end items-center h-[36px]">
          <nav className="flex items-center text-[12px] text-westpac-navy">
            <a onClick={handleNavClick} className="pr-3 border-r border-westpac-border/70 hover:underline cursor-pointer leading-none">Contact us</a>
            <a onClick={handleNavClick} className="px-3 border-r border-westpac-border/70 hover:underline cursor-pointer leading-none">Locate us</a>
            <a onClick={handleNavClick} className="px-3 border-r border-westpac-border/70 hover:underline cursor-pointer leading-none">Lost or stolen cards</a>
            <a onClick={handleNavClick} className="pl-3 font-bold hover:underline cursor-pointer leading-none">Register</a>
          </nav>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className="w-full bg-westpac-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] border-b border-westpac-border/20">
        <div
          className="w-full max-w-[1200px] mx-auto px-6 flex items-stretch justify-between"
          style={{ height: "72px" }}
        >
          {/* Left: logo + page nav */}
          <div className="flex items-stretch gap-6">
            {/* Logo */}
            <a
              href="#"
              aria-label="Westpac Home"
              className={`flex items-center pr-6 transition-opacity duration-300 ${isNavigating ? "opacity-40" : "opacity-100"}`}
            >
              <img src="/logo.svg" alt="Westpac" width={80} height={32} style={{ display: "block" }} />
            </a>

            {/* Page nav links */}
            <nav className="hidden lg:flex items-stretch" aria-label="Main navigation">
              {mainNavItems.map((item, i) => (
                <a
                  key={item}
                  onClick={handleNavClick}
                  className={[
                    "flex items-center px-3.5 text-[14px] cursor-pointer transition-colors border-b-[3px]",
                    i === 0
                      ? "text-westpac-navy font-semibold border-westpac-red"
                      : "text-westpac-navy font-normal border-transparent hover:text-westpac-red hover:border-westpac-red/50",
                  ].join(" ")}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Online Banking dropdown + Sign in + Search */}
          <div className="flex items-center gap-2">
            {/* Online Banking dropdown */}
            <div className="hidden lg:flex items-center gap-2 border border-westpac-border rounded-[3px] px-3.5 py-[7px] text-[13px] text-westpac-navy cursor-pointer hover:border-westpac-navy transition-colors select-none">
              <span className="whitespace-nowrap">Online Banking – Personal</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Sign in */}
            <button className="bg-westpac-red text-white px-5 py-2 text-[14px] font-semibold rounded-[3px] hover:bg-westpac-red-hover transition-colors whitespace-nowrap">
              Sign in
            </button>

            {/* Search */}
            <button
              className="hidden lg:flex items-center justify-center p-2 text-westpac-navy hover:text-westpac-red transition-colors"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button className="lg:hidden flex items-center justify-center p-2 text-westpac-navy" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
