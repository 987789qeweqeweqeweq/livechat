export type RegionCode = "NZ" | "AU" | "US" | "UK" | "HK" | "IN" | "CA" | "GLOBAL";

export interface RegionData {
  code: RegionCode;
  countryName: string;
  supportPhone: string;
  termsUrl: string;
  heroSubtitle: string;
  brandName: string;
  legalEntityName: string;
}

export const REGIONS: Record<RegionCode, RegionData> = {
  NZ: {
    code: "NZ",
    countryName: "New Zealand",
    supportPhone: "0800 400 600",
    termsUrl: "https://www.westpac.co.nz/terms/",
    heroSubtitle: "Connect with our New Zealand support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac New Zealand Limited"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "132 032",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our Australian support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  US: {
    code: "US",
    countryName: "United States",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "+61 2 9155 7700",
    termsUrl: "https://www.westpac.com.au/terms/",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "Westpac",
    legalEntityName: "Westpac Banking Corporation"
  }
};
