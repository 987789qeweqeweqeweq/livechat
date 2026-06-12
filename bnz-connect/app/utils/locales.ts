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
    supportPhone: "0800 275 269",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our New Zealand support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  US: {
    code: "US",
    countryName: "United States",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "+64 4 474 6999",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "0800 275 269",
    termsUrl: "https://www.bnz.co.nz/support/terms-and-conditions",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "BNZ",
    legalEntityName: "Bank of New Zealand Limited"
  }
};
