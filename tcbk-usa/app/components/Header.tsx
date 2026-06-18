"use client";

import Image from "next/image";
import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type Segment = "Personal" | "Business" | "Corporate";

export function Header() {
  const [activeTab, setActiveTab] = useState<Segment>("Corporate");
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleTabClick = (e: React.MouseEvent, segment: Segment) => {
    e.preventDefault();
    if (segment === activeTab) return;

    // Simulate navigation/loading
    setIsNavigating(true);
    setTimeout(() => {
      setActiveTab(segment);
      setIsNavigating(false);
    }, 600); // 600ms fake load time
  };

  return (
    <header className="w-full flex flex-col font-['canada-type-gibson'] relative">
      {/* Simulated Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div
            className="h-full bg-tcbk-gold"
            style={{ width: "100%", transformOrigin: "left", animation: "progress 0.6s ease-out" }}
          ></div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}} />

      {/* Top Dark Utility Bar */}
      <div className="w-full bg-[#333F48] hidden md:block">
        <div className="w-full max-w-[1240px] mx-auto px-6 h-[38px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/fdic-digital-logo-white.svg" alt="FDIC" width={38} height={16} className="flex-shrink-0" />
            <span className="text-[#9BA5AD] text-[11px]">FDIC-Insured · Backed by the full faith and credit of the U.S. Government</span>
          </div>
          <div className="flex items-center text-[#9BA5AD] text-[12px] divide-x divide-[#4A5A66]">
            <span className="hover:text-white transition-colors cursor-pointer px-3">Open an Account</span>
            <span className="hover:text-white transition-colors cursor-pointer px-3">Locations</span>
            <span className="hover:text-white transition-colors cursor-pointer px-3">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <div
        className="w-full bg-tcbk-white border-b border-tcbk-gray-border/40"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 12px 0px" }}
      >
        <div className="w-full max-w-[1240px] mx-auto px-6 h-[80px] md:h-[100px] flex justify-between items-stretch">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0 self-center">
            <Image
              src="/tcb_logo.svg"
              alt="Tri Counties Bank — California's local bank"
              width={220}
              height={73}
              className={`h-[52px] md:h-[66px] w-auto object-contain transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-stretch gap-0">
            <nav className="flex items-stretch h-full" aria-label="Business segments">
              {(["Personal", "Business", "Corporate"] as Segment[]).map((seg) => (
                <a
                  key={seg}
                  onClick={(e) => handleTabClick(e, seg)}
                  className={`px-5 text-[15px] font-medium cursor-pointer transition-colors select-none flex items-center border-b-2 ${
                    activeTab === seg
                      ? "border-tcbk-gold text-tcbk-text font-semibold"
                      : "border-transparent text-tcbk-text hover:text-tcbk-gold hover:border-tcbk-gold"
                  }`}
                >
                  {seg}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-[#D0D3D4] self-center">
              <span className="text-[15px] text-tcbk-text font-medium hover:text-tcbk-gold transition-colors cursor-pointer">
                Support
              </span>
              <span className="text-[15px] text-tcbk-text font-medium hover:text-tcbk-gold transition-colors cursor-pointer">
                Security
              </span>
              <button className="bg-transparent border border-tcbk-gold text-tcbk-black px-5 py-2 hover:bg-tcbk-gold hover:text-tcbk-black transition-colors text-[14px] font-semibold tracking-wide rounded-none ml-2">
                Log On
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center self-center">
            <button className="p-2" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
