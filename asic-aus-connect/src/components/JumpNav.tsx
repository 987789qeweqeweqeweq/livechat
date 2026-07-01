"use client";

const navLinks = [
  { label: "Latest news", href: "#featured" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Investigations and enforcement", href: "#investigations-and-enforcement" },
  { label: "Dealing with ASIC", href: "#dealing-with-asic" },
] as const;

export function JumpNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#dee2e6]">
      <div className="max-w-[1260px] mx-auto px-6 flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-6 py-4 text-base font-normal text-[#283038] no-underline hover:text-[#0072CE] transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
