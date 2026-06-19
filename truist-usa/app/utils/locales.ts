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
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our U.S. support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "844-487-8478",
    termsUrl: "https://www.truist.com/terms-and-conditions",
    heroSubtitle: "Connect with our support team instantly.",
    brandName: "Truist",
    legalEntityName: "Truist Bank"
  }
};
