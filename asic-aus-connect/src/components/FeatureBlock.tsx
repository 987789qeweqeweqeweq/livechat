import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EnforcementActivity {
  label: string;
  href: string;
}

interface FeatureBlockProps {
  id: string;
  image: string;
  imageAlt: string;
  imageOnLeft: boolean;
  heading: string;
  tagline: string;
  learnMoreText: string;
  learnMoreHref: string;
  bgColor?: string;
  enforcementActivities?: { label: string; href: string }[];
}

export function FeatureBlock({
  id,
  image,
  imageAlt,
  imageOnLeft,
  heading,
  tagline,
  learnMoreText,
  learnMoreHref,
  bgColor = "#FFFFFF",
  enforcementActivities,
}: FeatureBlockProps) {
  const imageColumn = (
    <div className="relative w-full h-[400px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover rounded-[4px]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const contentColumn = (
    <div>
      <h2 className="text-[32px] font-bold text-[#283038] mb-4 leading-tight">
        {heading}
      </h2>
      <p className="text-[16px] text-[#283038] leading-[1.6] mb-6">
        {tagline}
      </p>
      <Link
        href={learnMoreHref}
        className="inline-flex gap-2 items-center text-white bg-[#0072CE] px-5 py-[10px] rounded-[4px] font-medium hover:bg-[#005fa3] transition-colors"
      >
        {learnMoreText}
        <ArrowRight size={16} />
      </Link>

      {enforcementActivities && enforcementActivities.length > 0 && (
        <div className="mt-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6C757D] mb-3">
            Enforcement activities
          </p>
          <div className="grid grid-cols-2 gap-y-1 gap-x-4">
            {enforcementActivities.map((activity: EnforcementActivity) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="text-[14px] text-[#0072CE] no-underline py-1 hover:underline"
              >
                {activity.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id={id} className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1260px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {imageOnLeft ? (
            <>
              {imageColumn}
              {contentColumn}
            </>
          ) : (
            <>
              {contentColumn}
              {imageColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const INVESTIGATIONS_ENFORCEMENT_ACTIVITIES: { label: string; href: string }[] =
  [
    {
      label: "ALAMMC Developments",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/alammc-developments/",
    },
    {
      label: "Ascent Investments and Coaching Pty Ltd and Michael Dunjey",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/ascent-investments-and-coaching-pty-ltd-and-michael-dunjey/",
    },
    {
      label: "Brite Advisors",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/brite-advisors/",
    },
    {
      label: "First Guardian Master Fund",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/first-guardian-master-fund/",
    },
    {
      label: "First Mutual Private Equity Pty",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/first-mutual-private-equity-pty/",
    },
    {
      label: "Shield Master Fund",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/shield-master-fund/",
    },
    {
      label: "Youpla Group",
      href: "/about-asic/asic-investigations-and-enforcement/enforcement-activities/youpla-group/",
    },
  ];

export function InvestigationsSection() {
  return (
    <FeatureBlock
      id="investigations-and-enforcement"
      image="/images/hero-home.jpg"
      imageAlt="ASIC headquarters building"
      imageOnLeft={true}
      heading="ASIC investigations and enforcement"
      tagline="We are committed to detecting, investigating and disrupting unlawful conduct"
      learnMoreText="ASIC investigations and enforcement"
      learnMoreHref="/about-asic/asic-investigations-and-enforcement/"
      bgColor="#FFFFFF"
      enforcementActivities={INVESTIGATIONS_ENFORCEMENT_ACTIVITIES}
    />
  );
}

export function DealingWithASICSection() {
  return (
    <FeatureBlock
      id="dealing-with-asic"
      image="/images/woman-lift.jpg"
      imageAlt="A woman walking out of a lift in a white office building"
      imageOnLeft={false}
      heading="Dealing with ASIC"
      tagline="Interacting with ASIC involves accessing regulatory guidance, lodging forms, managing company or business registrations and addressing compliance"
      learnMoreText="Dealing with ASIC"
      learnMoreHref="/dealing-with-asic/"
      bgColor="#F8F9FA"
    />
  );
}
