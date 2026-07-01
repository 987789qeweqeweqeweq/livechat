import Link from "next/link";

interface ResourceCard {
  title: string;
  description: string;
  href: string;
  bgClass: string;
}

const resources: ResourceCard[] = [
  {
    title: "Regulatory",
    description:
      "Guidance to help you understand how ASIC interprets the law, and when and how we use our powers",
    href: "/regulatory-resources",
    bgClass: "bg-[#1a2530]",
  },
  {
    title: "Professional",
    description:
      "Information about applying for and maintaining your licence or professional registration",
    href: "/for-finance-professionals",
    bgClass: "bg-[#1e3a5f]",
  },
  {
    title: "Business and companies",
    description:
      "Information and guides to help you start and manage a business or company",
    href: "/for-business-and-companies",
    bgClass: "bg-[#243040]",
  },
  {
    title: "Services/Registers",
    description:
      "Register with ASIC, lodge documents, update details and download company annual statements",
    href: "/online-services",
    bgClass: "bg-[#2a3a4a]",
  },
];

export function ResourcesGrid() {
  return (
    <section className="grid-square-links bg-[#283038] py-[64px]">
      <div className="mx-auto max-w-[1260px] px-6">
        <h2 className="text-[32px] font-bold text-white mb-[32px]">
          Resources for
        </h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] h-auto lg:h-[280px]">
          {resources.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`flex flex-col justify-end p-[32px] text-white h-full min-h-[200px] lg:min-h-0 hover:brightness-110 transition-[filter] ${card.bgClass}`}
            >
              <h3 className="text-[20px] font-semibold text-white mb-[8px]">
                {card.title}
              </h3>
              <p className="text-[14px] text-white/80 leading-[1.5]">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
