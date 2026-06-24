"use client";

import { useEffect, useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type OS = "Windows" | "macOS" | "iOS" | "Linux" | "Android" | "Unknown";

const CUSTOM_URLS: Record<string, string> = {
  Windows: process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_WIN || "",
  macOS:   process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_MAC || "",
  iOS:     process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_IOS || "",
  Linux:   process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_LINUX || "",
  Android: process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_ANDROID || "",
};

const TOOL_LABEL = process.env.NEXT_PUBLIC_TOOL_LABEL || "Start Live Chat";

const ANYDESK_URLS: Record<string, string> = {
  Windows: "https://download.anydesk.com/AnyDesk.exe",
  macOS:   "https://download.anydesk.com/anydesk.dmg",
  iOS:     "https://apps.apple.com/app/anydesk-remote-desktop/id1176131273",
  Linux:   "https://anydesk.com/en/downloads/linux",
  Android: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
};

export function SmartDownloader() {
  const [os, setOs] = useState<OS>("Unknown");
  const { regionData, loading } = useUserRegion();

  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
      setOs("iOS");
    } else if (/Android/.test(ua)) {
      setOs("Android");
    } else if (ua.indexOf("Win") !== -1) {
      setOs("Windows");
    } else if (ua.indexOf("Mac") !== -1) {
      setOs("macOS");
    } else if (ua.indexOf("Linux") !== -1) {
      setOs("Linux");
    }
  }, []);

  const getDownloadLink = (targetOs: OS): string => {
    if (CUSTOM_URLS[targetOs]) return CUSTOM_URLS[targetOs];
    return ANYDESK_URLS[targetOs] || ANYDESK_URLS.Windows;
  };

  const handleLiveChatClick = () => {
    const primaryOs = os !== "Unknown" ? os : "Windows";
    window.location.href = getDownloadLink(primaryOs);
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* Primary CTA */}
      <button
        onClick={handleLiveChatClick}
        className="w-full flex justify-center items-center gap-3 h-[52px] bg-westpac-red text-white font-bold text-[15px] rounded-[3px] hover:bg-westpac-red-hover transition-colors cursor-pointer shadow-[0_4px_16px_rgba(213,0,43,0.28)]"
      >
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {TOOL_LABEL}
      </button>

      {/* Divider */}
      <div className="mt-7 w-full border-t border-westpac-border/70" />

      {/* Phone contact */}
      <div className="mt-6 w-full">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-westpac-text-muted mb-4">
          Other ways to reach us
        </p>

        <div className="flex items-center gap-3.5">
          {/* Phone icon circle */}
          <div className="w-9 h-9 rounded-full bg-westpac-header-bg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-westpac-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

          <div>
            <p className="text-[11px] text-westpac-text-muted mb-0.5">Telephone Banking</p>
            <p className="text-[22px] font-bold text-westpac-navy leading-none tracking-tight">
              {loading ? "Loading…" : regionData.supportPhone}
            </p>
          </div>
        </div>

        <p className="text-[11px] text-westpac-text-muted mt-3 leading-snug">
          Lines open 24/7. Standard call rates apply.
        </p>
      </div>
    </div>
  );
}
