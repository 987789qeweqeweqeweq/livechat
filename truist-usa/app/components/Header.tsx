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

    setIsNavigating(true);
    setTimeout(() => {
      setActiveTab(segment);
      setIsNavigating(false);
    }, 600);
  };

  const activeTabStyle = "bg-truist-purple text-truist-white text-[12px] font-bold px-3 py-2 border-b-2 border-truist-white inline-block cursor-pointer";
  const inactiveTabStyle = "bg-truist-purple text-[#C4B5D0] text-[12px] px-3 py-2 border-b-2 border-transparent hover:text-truist-white transition-colors inline-block cursor-pointer";

  return (
    <header className="w-full flex flex-col font-['TruistTrio'] relative">
      {/* Simulated Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div className="h-full bg-truist-purple animate-[shine_0.6s_ease-out_forwards]" style={{ width: '100%', transformOrigin: 'left', animation: 'progress 0.6s ease-out' }}></div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}} />

      {/* Top Purple Nav */}
      <div className="w-full bg-truist-purple hidden md:block">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <nav className="flex space-x-1" aria-label="Business segments">
            <a onClick={(e) => handleTabClick(e, "Personal")} className={activeTab === "Personal" ? activeTabStyle : inactiveTabStyle}>
              Personal
            </a>
            <a onClick={(e) => handleTabClick(e, "Business")} className={activeTab === "Business" ? activeTabStyle : inactiveTabStyle}>
              Business
            </a>
            <a onClick={(e) => handleTabClick(e, "Corporate")} className={activeTab === "Corporate" ? activeTabStyle : inactiveTabStyle}>
              Corporate
            </a>
          </nav>

          <div className="text-[#C4B5D0] text-[12px]">
             Welcome to <span className="text-white font-bold">{loading ? "Truist" : regionData.brandName}</span>
          </div>
        </div>
      </div>

      {/* Main White Nav */}
      <div className="w-full bg-truist-white border-b border-truist-gray-border/50">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-[72px] md:h-[96px] flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/truist-logo-purple.svg"
              alt="Truist Logo"
              width={200}
              height={80}
              className={`h-8 md:h-10 object-contain transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
              style={{ width: 'auto' }}
              priority
            />
          </div>

          <div className="hidden lg:flex items-center gap-6">
             <span className="text-base text-truist-text font-normal hover:text-truist-purple transition-colors cursor-pointer border-b-2 border-transparent hover:border-truist-purple pb-1">
               Support
             </span>
             <span className="text-base text-truist-text font-normal hover:text-truist-purple transition-colors cursor-pointer border-b-2 border-transparent hover:border-truist-purple pb-1">
               Security
             </span>
             <button className="bg-transparent border border-truist-purple text-truist-purple px-5 py-2 hover:bg-truist-purple hover:text-truist-white transition-colors text-sm font-bold tracking-wide rounded-none">
               Sign In
             </button>
          </div>

          <div className="lg:hidden flex items-center">
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
