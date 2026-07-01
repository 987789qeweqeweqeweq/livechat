import Image from "next/image";
import Link from "next/link";

// Inline SVG brand icons (lucide-react v1.x removed brand icons)
function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const footerColumns = [
  {
    heading: "About ASIC",
    links: [
      { label: "What we do", href: "/about-asic/what-we-do/" },
      {
        label: "Investigation and enforcement",
        href: "/about-asic/asic-investigations-and-enforcement/",
      },
      {
        label: "Enforcement activities",
        href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/",
      },
      { label: "Dealing with ASIC", href: "/dealing-with-asic/" },
      { label: "ASIC events", href: "/about-asic/events/" },
      {
        label: "Information for MPs & Senators",
        href: "/about-asic/information-for-mps-senators/",
      },
    ],
  },
  {
    heading: "Newsroom",
    links: [
      {
        label: "Media releases",
        href: "/about-asic/news-centre/find-a-media-release/",
      },
      {
        label: "Speeches",
        href: "/about-asic/news-centre/find-a-speech/",
      },
      {
        label: "News Articles",
        href: "/about-asic/news-centre/find-a-news-article/",
      },
      {
        label: "For journalists",
        href: "/about-asic/news-centre/for-journalists/",
      },
      {
        label: "Inside ASIC podcast",
        href: "/about-asic/news-centre/inside-asic-podcast/",
      },
    ],
  },
  {
    heading: "Corporate publications",
    links: [
      {
        label: "ASIC annual reports",
        href: "/about-asic/corporate-publications/asic-annual-reports/",
      },
      {
        label: "ASIC corporate plan",
        href: "/about-asic/corporate-publications/asic-corporate-plan/",
      },
      {
        label: "Newsletters",
        href: "/about-asic/corporate-publications/newsletters/",
      },
      {
        label: "ASIC Gazette",
        href: "/about-asic/corporate-publications/asic-gazette/",
      },
      {
        label: "ASIC Digest",
        href: "/about-asic/corporate-publications/asic-digest/",
      },
    ],
  },
  {
    heading: "Online services",
    links: [
      {
        label: "ASIC portals",
        href: "https://connectonline.asic.gov.au",
        external: true,
      },
      {
        label: "Search ASIC registers",
        href: "/online-services/search-asic-registers/",
      },
      {
        label: "ASIC Connect",
        href: "https://connectonline.asic.gov.au",
        external: true,
      },
      {
        label: "Regulatory portal",
        href: "https://regulatoryportal.asic.gov.au",
        external: true,
      },
    ],
  },
  {
    heading: "Careers at ASIC",
    links: [
      {
        label: "Work with us",
        href: "/about-asic/careers-at-asic/",
      },
    ],
  },
  {
    heading: "Contact us",
    links: [
      {
        label: "Top call centre questions",
        href: "/dealing-with-asic/contact-us/asic-call-centre-questions/",
      },
      {
        label: "Report issue to ASIC",
        href: "/report-misconduct/",
      },
      {
        label: "Reporting misconduct to ASIC",
        href: "/report-misconduct/",
      },
      {
        label: "Scams",
        href: "/dealing-with-asic/common-problems-complaints-and-scams/scams/",
      },
      {
        label: "ASIC offices",
        href: "/about-asic/contact-us/asic-offices/",
      },
    ],
  },
] as const;

const legalLinks = [
  { label: "Freedom of information", href: "/freedom-of-information/" },
  { label: "Copyright", href: "/copyright/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Service availability", href: "/service-availability/" },
  { label: "Contact us", href: "/dealing-with-asic/contact-us/" },
  { label: "Accessibility", href: "/accessibility/" },
] as const;

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#283038", color: "#EAEBEC" }}>
      {/* 1. Feedback row */}
      <div
        className="border-b border-white/15"
        style={{ padding: "24px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 flex-wrap">
            <span style={{ fontSize: "16px", color: "#EAEBEC" }}>
              Did you find the information on this page helpful?
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="cursor-pointer transition-colors hover:bg-white/10"
                style={{
                  border: "1px solid #EAEBEC",
                  color: "#EAEBEC",
                  background: "transparent",
                  borderRadius: "4px",
                  padding: "8px 24px",
                  fontSize: "14px",
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="cursor-pointer transition-colors hover:bg-white/10"
                style={{
                  border: "1px solid #EAEBEC",
                  color: "#EAEBEC",
                  background: "transparent",
                  borderRadius: "4px",
                  padding: "8px 24px",
                  fontSize: "14px",
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main link grid */}
      <div style={{ padding: "48px 0 32px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 gap-y-6"
            style={{ gap: "24px 16px" }}
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3
                  className="uppercase tracking-[0.08em]"
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {col.heading}
                </h3>
                <ul className="list-none p-0 m-0">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block no-underline hover:text-white hover:underline transition-colors"
                          style={{
                            color: "#EAEBEC",
                            fontSize: "14px",
                            paddingTop: "3px",
                            paddingBottom: "3px",
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="block no-underline hover:text-white hover:underline transition-colors"
                          style={{
                            color: "#EAEBEC",
                            fontSize: "14px",
                            paddingTop: "3px",
                            paddingBottom: "3px",
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Social + Acknowledgement row */}
      <div
        className="border-t border-white/15"
        style={{ padding: "24px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-wrap items-center justify-between"
            style={{ gap: "24px" }}
          >
            {/* Social icons */}
            <div className="flex items-center gap-4 flex-wrap">
              <span style={{ fontSize: "14px", color: "#EAEBEC" }}>
                Follow us on:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/ASIC_Connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ASIC on X (Twitter)"
                  className="transition-colors hover:text-white"
                  style={{ color: "#EAEBEC" }}
                >
                  <XIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/australian-securities-and-investments-commission"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ASIC on LinkedIn"
                  className="transition-colors hover:text-white"
                  style={{ color: "#EAEBEC" }}
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://www.facebook.com/ASICMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ASIC on Facebook"
                  className="transition-colors hover:text-white"
                  style={{ color: "#EAEBEC" }}
                >
                  <FacebookIcon size={20} />
                </a>
              </div>
            </div>

            {/* Acknowledgement of Country */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/djooroot-moort-artwork.png"
                alt="Djooroot Moort artwork"
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
              />
              <p
                className="max-w-sm"
                style={{ fontSize: "13px", color: "#EAEBEC", margin: 0 }}
              >
                ASIC acknowledges Aboriginal and Torres Strait Islander peoples
                as the First Peoples of Australia and pays respect to their
                Elders past and present.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Legal bar */}
      <div
        className="border-t border-white/15"
        style={{ padding: "16px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "16px", fontSize: "13px", color: "#EAEBEC" }}
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="no-underline hover:text-white hover:underline transition-colors whitespace-nowrap"
                style={{ color: "#EAEBEC", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
            <span className="ml-auto whitespace-nowrap" style={{ color: "#EAEBEC" }}>
              &copy; 2026 Australian Securities &amp; Investments Commission
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
