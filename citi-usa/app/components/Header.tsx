"use client";

import Image from "next/image";
import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type NavItem = "Credit Cards" | "Banking" | "Mortgages" | "Personal Loans" | "Investing" | "Small Business" | "Wealth";

const NAV_ITEMS: NavItem[] = [
  "Credit Cards",
  "Banking",
  "Mortgages",
  "Personal Loans",
  "Investing",
  "Small Business",
  "Wealth",
];

export function Header() {
  const [activeItem, setActiveItem] = useState<NavItem>("Banking");
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (item === activeItem) return;
    setIsNavigating(true);
    setTimeout(() => {
      setActiveItem(item);
      setIsNavigating(false);
    }, 600);
  };

  return (
    <header className="w-full relative z-50">
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden">
          <div
            className="h-full bg-citi-blue"
            style={{ width: "100%", transformOrigin: "left", animation: "progress 0.6s ease-out" }}
          />
        </div>
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes progress {
            0%   { transform: scaleX(0); }
            50%  { transform: scaleX(0.7); }
            100% { transform: scaleX(1); }
          }
        `,
      }} />

      {/* Single 88px nav bar — matches measured citigroup.com header */}
      <div
        className="w-full bg-white"
        style={{ boxShadow: "rgba(0, 65, 165, 0.2) 0px 5px 12px 1px" }}
      >
        <div className="w-full max-w-[1176px] mx-auto px-6 h-[88px] flex items-center">

          {/* Logo */}
          <div className="flex items-center shrink-0 mr-8">
            <Image
              src="/citi-logo.svg"
              alt="Citi"
              width={96}
              height={38}
              className={`h-9 object-contain transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
              style={{ width: "auto" }}
              priority
            />
          </div>

          {/* Product navigation — hidden below lg */}
          <nav className="hidden lg:flex items-center h-full flex-1 overflow-x-auto" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                onClick={(e) => handleNavClick(e, item)}
                className={`h-full flex items-center px-3 xl:px-4 text-[13.5px] border-b-[3px] cursor-pointer whitespace-nowrap transition-all duration-150 select-none ${
                  activeItem === item
                    ? "text-citi-navy font-semibold border-citi-blue"
                    : "text-citi-navy font-normal border-transparent hover:text-citi-blue hover:border-citi-blue/50"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="ml-auto flex items-center gap-4 shrink-0">
            <span className="hidden xl:block text-[13.5px] text-citi-navy hover:text-citi-blue transition-colors cursor-pointer font-normal whitespace-nowrap">
              Security Center
            </span>
            <button className="bg-citi-blue text-white px-5 py-[7px] hover:bg-citi-blue-hover transition-colors text-[13.5px] font-semibold rounded tracking-wide whitespace-nowrap">
              Sign On
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center ml-auto">
            <button className="p-2 text-citi-navy" aria-label="Open menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
