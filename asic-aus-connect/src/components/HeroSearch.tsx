"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

type Tab = "popular" | "featured"

interface TaskLink {
  label: string
  href: string
  external?: boolean
}

const popularTasks: TaskLink[] = [
  {
    label: "Register a business name",
    href: "/for-business-and-companies/business-names/register-a-business-name",
  },
  {
    label: "Renew a business name",
    href: "/for-business-and-companies/business-names/renew-a-business-name-registration/",
  },
  {
    label: "Register a company",
    href: "/for-business-and-companies/companies/register-a-company",
  },
  {
    label: "Search ASIC registers",
    href: "/online-services/search-asic-registers/",
  },
  {
    label: "Search regulatory resources",
    href: "/regulatory-resources/regulatory-resources-search/",
  },
  {
    label: "Report issue to ASIC",
    href: "/report-misconduct/",
  },
]

const featuredTopics: TaskLink[] = [
  {
    label: "What to do if you've been scammed",
    href: "/dealing-with-asic/what-to-do-if-you-ve-been-scammed/",
  },
  {
    label: "Financial adviser exam",
    href: "/for-finance-professionals/financial-advisers/financial-adviser-exam/",
  },
  {
    label: "Identity theft - Moneysmart.gov.au",
    href: "https://moneysmart.gov.au/identity-theft",
    external: true,
  },
  {
    label: "Crypto scams - Moneysmart.gov.au",
    href: "https://moneysmart.gov.au/crypto-scams",
    external: true,
  },
  {
    label: "Sustainability reporting",
    href: "/regulatory-resources/sustainability-reporting/",
  },
]

const tabCardClass =
  "bg-white/95 border-t-[3px] border-t-[#0072CE] text-[#283038] px-4 h-20 font-medium flex items-center justify-center text-center transition-colors duration-150 hover:bg-[#0072CE] hover:text-white"

function TaskCard({ task }: { task: TaskLink }) {
  if (task.external) {
    return (
      <a
        href={task.href}
        target="_blank"
        rel="noopener noreferrer"
        className={tabCardClass}
      >
        {task.label}
      </a>
    )
  }
  return (
    <Link href={task.href} className={tabCardClass}>
      {task.label}
    </Link>
  )
}

export function HeroSearch() {
  const [activeTab, setActiveTab] = useState<Tab>("popular")

  const tasks = activeTab === "popular" ? popularTasks : featuredTopics

  return (
    <section className="hero-search-section py-[72px] min-h-[550px]">
      <div className="max-w-[1260px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white text-[28px] font-semibold mb-4">
          I am looking for &hellip;
        </h2>

        {/* Search bar */}
        <div className="flex max-w-[800px]">
          <input
            type="text"
            aria-label="Search"
            placeholder="Search"
            className="flex-1 h-12 px-3 bg-white text-[#283038] border-2 border-[#909AA6] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:border-[#0072CE] focus:outline-none"
          />
          <button
            type="button"
            className="flex items-center gap-2 h-12 px-4 bg-[#1d252d] text-[#EAEBEC] font-medium border-2 border-[#909AA6] border-l-0 rounded-tr-[4px] rounded-br-[4px] cursor-pointer"
          >
            <Search size={16} aria-hidden="true" />
            Search
          </button>
        </div>

        {/* Tab container */}
        <div className="mt-10 bg-black/35 rounded-[4px]">

          {/* Tab buttons */}
          <div className="flex">
            <button
              type="button"
              onClick={() => setActiveTab("popular")}
              className={cn(
                "text-white font-medium px-8 h-12 bg-transparent cursor-pointer border-b-[3px]",
                activeTab === "popular"
                  ? "border-b-[#0072CE]"
                  : "border-b-transparent"
              )}
            >
              Popular tasks ▾
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className={cn(
                "text-white font-medium px-8 h-12 bg-transparent cursor-pointer border-b-[3px]",
                activeTab === "featured"
                  ? "border-b-[#0072CE]"
                  : "border-b-transparent"
              )}
            >
              Featured topics ›
            </button>
          </div>

          {/* Task cards grid */}
          <div className="grid grid-cols-3 gap-2 p-4">
            {tasks.map((task) => (
              <TaskCard key={task.href} task={task} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
