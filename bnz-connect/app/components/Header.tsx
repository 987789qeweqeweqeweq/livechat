"use client";

import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type Segment = "Personal" | "Business" | "Corporate";

export function Header() {
  const [activeTab, setActiveTab] = useState<Segment>("Business");
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleTabClick = (e: React.MouseEvent, segment: Segment) => {
    e.preventDefault();
    if (segment === activeTab) return;

    setIsNavigating(true);
    setTimeout(() => {
      setActiveTab(segment);
      setIsNavigating(false);
    }, 600);
  };

  const activeTabStyle =
    "text-bnz-deep-blue text-[14px] font-bold px-4 py-2.5 border-b-[3px] border-bnz-gold inline-block cursor-pointer transition-all duration-200";
  const inactiveTabStyle =
    "text-bnz-text-muted text-[14px] font-normal px-4 py-2.5 border-b-[3px] border-transparent hover:text-bnz-deep-blue hover:border-bnz-gold/40 transition-all duration-200 inline-block cursor-pointer";

  return (
    <header className="w-full flex flex-col relative">
      {/* Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div
            className="h-full bg-bnz-gold animate-[shine_0.6s_ease-out_forwards]"
            style={{
              width: "100%",
              transformOrigin: "left",
              animation: "progress 0.6s ease-out",
            }}
          ></div>
        </div>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `,
        }}
      />

      {/* Top Light Bar — segment tabs */}
      <div className="w-full bg-bnz-header-bg hidden md:block border-b border-bnz-border/50">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <nav className="flex" aria-label="Business segments">
            <a
              onClick={(e) => handleTabClick(e, "Personal")}
              className={
                activeTab === "Personal" ? activeTabStyle : inactiveTabStyle
              }
            >
              Personal
            </a>
            <a
              onClick={(e) => handleTabClick(e, "Business")}
              className={
                activeTab === "Business" ? activeTabStyle : inactiveTabStyle
              }
            >
              Business
            </a>
            <a
              onClick={(e) => handleTabClick(e, "Corporate")}
              className={
                activeTab === "Corporate" ? activeTabStyle : inactiveTabStyle
              }
            >
              Corporate
            </a>
          </nav>

          <div className="text-bnz-text-muted text-[13px]">
            Welcome to{" "}
            <span className="text-bnz-deep-blue font-semibold">
              {loading ? "BNZ" : regionData.brandName}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-bnz-white shadow-[0_2px_8px_rgba(0,47,107,0.08)]">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-[64px] md:h-[80px] flex justify-between items-center">
          {/* BNZ Logo — inline SVG */}
          <div className="flex items-center">
            <a
              href="#"
              className={`transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
              aria-label="BNZ Home"
            >
              <svg
                width="80"
                height="40"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* "bnz" text */}
                <text
                  x="0"
                  y="62"
                  fontFamily="SerranoWeb, Tahoma, sans-serif"
                  fontSize="72"
                  fontWeight="700"
                  fill="#002f6b"
                  letterSpacing="-2"
                >
                  bnz
                </text>
                {/* Southern Cross Stars in Gold */}
                <circle cx="164" cy="10" r="5" fill="#faa61a" />
                <circle cx="176" cy="22" r="4" fill="#faa61a" />
                <circle cx="158" cy="28" r="3.5" fill="#faa61a" />
                <circle cx="170" cy="38" r="3" fill="#faa61a" />
              </svg>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="text-[15px] text-bnz-deep-blue font-normal hover:text-bnz-mid-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-bnz-gold pb-1">
              Support
            </span>
            <span className="text-[15px] text-bnz-deep-blue font-normal hover:text-bnz-mid-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-bnz-gold pb-1">
              Security
            </span>
            <button className="border border-bnz-mid-blue text-bnz-mid-blue bg-transparent px-5 py-2 hover:bg-bnz-mid-blue hover:text-white transition-all text-[14px] font-semibold tracking-wide rounded-[3px]">
              Register
            </button>
            <button className="bg-bnz-green text-white px-6 py-2 hover:bg-bnz-green-hover transition-colors text-[14px] font-semibold tracking-wide rounded-[3px]">
              Login
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <button className="p-2 text-bnz-deep-blue" aria-label="Menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
