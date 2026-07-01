import Image from "next/image";
import Link from "next/link";

interface NewsCard {
  type: string;
  date: string;
  title: string;
  imgSrc: string;
  href: string;
}

interface SidebarItem {
  type: string;
  date: string;
  title: string;
  href: string;
}

const NEWS_CARDS: NewsCard[] = [
  {
    type: "MEDIA RELEASE",
    date: "29 June 2026",
    title:
      "WA director Trent Bowden pleads guilty to over $1.5 million investor deception",
    imgSrc: "/images/news-media-release.jpg",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-137mr-wa-director-trent-bowden-pleads-guilty-to-over-1-5-million-investor-deception/",
  },
  {
    type: "MEDIA RELEASE",
    date: "29 June 2026",
    title:
      "ASIC secures $10.3 million in penalties against Mercer Super for systemic reporting failures",
    imgSrc: "/images/news-media-release.jpg",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-136mr-asic-secures-10-3-million-in-penalties-against-mercer-super-for-systemic-reporting-failures/",
  },
];

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    type: "NEWS",
    date: "29 June 2026",
    title:
      "Moneysmart encourages Australians to take 10 minutes to build a budget this new financial year",
    href: "/about-asic/news-centre/find-a-news-article/2026-releases/moneysmart-encourages-australians-to-take-10-minutes-to-build-a-budget-this-new-financial-year/",
  },
  {
    type: "MEDIA RELEASE",
    date: "29 June 2026",
    title:
      "ASIC calls platform trustees to account over persistent failures to safeguard super savings",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-135mr-asic-calls-platform-trustees-to-account-over-persistent-failures-to-safeguard-super-savings/",
  },
  {
    type: "MEDIA RELEASE",
    date: "26 June 2026",
    title:
      "Registered Company Auditor John Gordon Owenell hands in his registration",
    href: "/about-asic/news-centre/find-a-media-release/2026-releases/26-134mr-registered-company-auditor-john-gordon-owenell-hands-in-his-registration/",
  },
];

export function LatestNews() {
  return (
    <section id="whats-new" className="bg-white py-12">
      <div className="mx-auto max-w-[1260px] items-start gap-8 px-6 grid grid-cols-[2fr_2fr_1fr]">
        {/* Large news cards — left two columns */}
        {NEWS_CARDS.map((card) => (
          <Link key={card.href} href={card.href} className="group block">
            {/* Thumbnail */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src={card.imgSrc}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Meta */}
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#283038]">
              {card.type}
            </p>
            <p className="mb-2 text-[14px] text-[#6C757D]">{card.date}</p>

            {/* Title */}
            <h3 className="text-[18px] font-semibold leading-[1.4] text-[#283038] group-hover:text-[#0072CE]">
              {card.title}
            </h3>
          </Link>
        ))}

        {/* Sidebar — right column */}
        <div>
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.href}
              className="border-b border-[#dee2e6] py-3"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[#283038]">
                {item.type}
              </p>
              <p className="mb-1 text-[14px] text-[#6C757D]">{item.date}</p>
              <Link
                href={item.href}
                className="text-[16px] font-semibold leading-[1.4] text-[#283038] hover:text-[#0072CE]"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
