import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WhatWeDoCard {
  title: string;
  description: string;
  href: string;
}

const cards: WhatWeDoCard[] = [
  {
    title: "Our role",
    description:
      "We maintain, facilitate and improve the performance of the financial system and entities in it",
    href: "/about-asic/what-we-do/our-role/",
  },
  {
    title: "How we operate",
    description:
      "We operate under the direction of commissioners appointed by the Governor-General",
    href: "/about-asic/what-we-do/how-we-operate/",
  },
  {
    title: "Our structure",
    description:
      "Our organisational structure reflects our regulatory and registry responsibilities",
    href: "/about-asic/what-we-do/our-structure/",
  },
  {
    title: "Our people",
    description: "Our people are key to the ongoing effectiveness of ASIC",
    href: "/about-asic/what-we-do/our-people/",
  },
  {
    title: "International activities",
    description:
      "We work closely with international organisations, foreign regulators and law enforcement agencies",
    href: "/about-asic/what-we-do/international-activities/",
  },
  {
    title: "For consumers",
    description:
      "We regulate financial services and products to protect consumers, and provide consumer education through Moneysmart",
    href: "/about-asic/what-we-do/for-consumers/",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-[64px]">
      <div className="mx-auto max-w-[1260px] px-6">
        {/* Intro block */}
        <div>
          <h2 className="text-[32px] font-bold text-[#283038] mb-[8px]">
            What we do
          </h2>
          <p className="text-[18px] text-[#283038] leading-[1.6] mb-[16px]">
            ASIC is Australia&apos;s corporate, markets, financial services and
            consumer credit regulator.
          </p>
          <Link
            href="/about-asic/what-we-do/"
            className="inline-flex items-center gap-2 text-[#0072CE] font-medium"
          >
            Learn more
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block p-[24px] bg-[#F8F9FA] border-l-[4px] border-l-[#0072CE] hover:bg-[#e9ecef] transition-colors"
            >
              <h3 className="text-[17px] font-semibold text-[#283038] mb-[8px]">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#6C757D] leading-[1.5]">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
