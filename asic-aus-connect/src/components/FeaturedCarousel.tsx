"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Slide {
  title: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  cta: string;
  description?: string;
}

const slides: Slide[] = [
  {
    title: "ASIC lifts bonnet on car finance costs and distribution concerns",
    imgSrc: "/images/carousel-car-finance.jpg",
    imgAlt: "ASIC lifts bonnet on car finance costs and distribution concerns",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-132mr-asic-lifts-bonnet-on-car-finance-costs-and-distribution-concerns/",
    cta: "Read more",
  },
  {
    title: "ASIC calls platform trustees to account over persistent failures to safeguard super savings",
    imgSrc: "/images/carousel-newshub-granite.png",
    imgAlt: "ASIC calls platform trustees to account over persistent failures to safeguard super savings",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-135mr-asic-calls-platform-trustees-to-account-over-persistent-failures-to-safeguard-super-savings/",
    cta: "Read more",
  },
  {
    title: "Upcoming fee changes – July 2026",
    imgSrc: "/images/carousel-infocus.jpg",
    imgAlt: "Upcoming fee changes – July 2026",
    href: "/about-asic/corporate-publications/newsletters/infocus/infocus-june-2026-volume-35-issue-5/",
    cta: "Read June InFocus",
    description:
      "From 1 July 2026, some ASIC fees will change in line with the Consumer Price Index (CPI).",
  },
];

export function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section id="featured" className="py-12 bg-white">
      {/* Heading in constrained container */}
      <div className="max-w-[1260px] mx-auto px-6">
        <h2 className="text-[32px] font-bold text-[#283038] mb-6">Latest news</h2>
      </div>

      {/* Full-width carousel */}
      <div className="relative overflow-hidden">
        {/* Slides track */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full shrink-0 relative h-[400px]">
              {/* Slide image */}
              <Image
                src={slide.imgSrc}
                alt={slide.imgAlt}
                fill
                className="object-cover"
                sizes="100vw"
              />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 py-6 px-8 bg-[rgba(29,37,45,0.85)]">
                <h3 className="text-white text-[24px] font-semibold mb-2">
                  {slide.title}
                </h3>
                {slide.description && (
                  <p className="text-white text-sm mb-3">{slide.description}</p>
                )}
                <Link
                  href={slide.href}
                  className="text-white font-medium flex items-center gap-2 hover:underline"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#283038] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#283038] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-[4px] transition-colors duration-200 w-8 ${
              index === current ? "bg-[#0072CE]" : "bg-[#dee2e6]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
