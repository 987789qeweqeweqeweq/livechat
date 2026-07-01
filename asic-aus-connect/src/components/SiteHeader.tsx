import Image from "next/image";
import Link from "next/link";
import { UserCircle2, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "For business and companies",
    href: "/for-business-and-companies",
  },
  {
    label: "For finance professionals",
    href: "/for-finance-professionals",
  },
  {
    label: "Regulatory resources",
    href: "/regulatory-resources",
  },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-[#F8F9FA] border-b-[3px] border-b-[#0072CE]">
      <div
        className={cn(
          "mx-auto max-w-[1260px] py-12",
          "grid items-center gap-x-12 gap-y-8",
          "grid-cols-[auto_1fr_auto]"
        )}
      >
        {/* Logo — desktop wide / mobile stacked */}
        <div className="flex items-center">
          {/* Desktop logo */}
          <Image
            src="/images/asic-logo.svg"
            alt="ASIC logo"
            width={312}
            height={66}
            priority
            className="hidden lg:block"
          />
          {/* Mobile stacked logo */}
          <Image
            src="/images/asic-logo-stacked.svg"
            alt="ASIC logo"
            width={80}
            height={80}
            priority
            className="block lg:hidden"
          />
        </div>

        {/* Nav links — desktop only */}
        <nav
          className="hidden lg:flex items-center justify-center"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="text-[#283038] select-none"
                >
                  |
                </span>
              )}
              <Link
                href={link.href}
                className={cn(
                  "px-4 h-14 text-base font-normal text-[#283038]",
                  "flex items-center",
                  "hover:text-[#0072CE] transition-colors duration-150"
                )}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          {/* Hamburger menu — mobile only */}
          <button
            type="button"
            aria-label="Open navigation menu"
            className="lg:hidden bg-transparent text-[#283038] p-2"
          >
            <Menu size={24} />
          </button>

          {/* ASIC Portals button */}
          <a
            href="#"
            className={cn(
              "bg-[#0072CE] text-white",
              "px-4 py-2 rounded-[4px]",
              "font-medium text-sm",
              "flex items-center gap-2",
              "hover:bg-[#005fa3] transition-colors duration-150"
            )}
          >
            <UserCircle2 size={20} />
            <span>ASIC portals</span>
          </a>

          {/* Search button */}
          <button
            type="button"
            aria-label="Search"
            className="bg-transparent text-[#283038] p-2 hover:text-[#0072CE] transition-colors duration-150"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
