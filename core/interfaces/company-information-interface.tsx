import { CertificateDetails } from "./certificate-details-interface";
import { CompanyAddress } from "./company-address-interface";
import { CompanyEmployeeDetails } from "./company-employeeDetails-interface";
import { Product } from "./product-interface";
import { Review } from "./review-interface";
import { SimilarCompany } from "./similar-companies-interface";
import { Turnover } from "./turnover-interface";

export interface CompanyInformationInterface {
    indiaIndexInformationHeading: string;
    indiaIndexInformationContent: string;
    companyName: string;
    companyWebsite: string;
    companyFriendlyName: string;
    companyIncoperationYear: string;
    companyShortDescription: string;
    companyLongDescription: string;
    companyCoverImage: string;
    companyLogo: string;
    natureOfBusiness: string;
    annualTurnOver: Turnover;
    importExportCodeInitials: string;
    uplodedAt: string;
    companyType: string;
    tradeExperience: string;
    wareHouse: string;
    isManufacture: boolean;
    companyAddress: CompanyAddress;
    companyEmployeDetails: CompanyEmployeeDetails[];
    similarCompanies: SimilarCompany[];
    certificateDetails: CertificateDetails[];
    companyReviews: Review[];
    popularProducts: Product[];
}