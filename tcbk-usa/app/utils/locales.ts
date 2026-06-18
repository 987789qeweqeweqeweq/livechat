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
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our California local support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "1-800-922-8742",
    termsUrl: "https://www.tcbk.com/privacy-and-security/terms-of-use",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Tri Counties Bank",
    legalEntityName: "Tri Counties Bank"
  }
};

