export type RegionCode = "US" | "UK" | "AU" | "HK" | "IN" | "CA" | "GLOBAL";

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
  US: {
    code: "US",
    countryName: "United States",
    supportPhone: "1-800-374-9700",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our U.S. support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "+44-20-7500-1433",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "+61-2-8225-0615",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "+852-2860-0333",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "+91-22-4955-2484",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "+1-888-248-4226",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our Canadian support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "1-800-374-9700",
    termsUrl: "https://www.citi.com/tandc",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "Citi",
    legalEntityName: "Citibank, N.A."
  }
};
