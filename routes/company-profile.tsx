import { useState } from "react";
import Head from 'next/head';
import IndiaIndexLayout from "../layouts/india-index-layout/india-index-layout";
import MainCompanyBannerArea from "../components/main-company-banner-area";
import CompanyOverview from "../components/company-overview";
import CompanyCertificates from "../components/company-certificates";
import CompanyReviews from "../components/company-reviews";
import CompanyProducts from "../components/company-products";
import CompanyAddressCard from "../components/company-address-card";
import SimilarCompanies from "../components/similar-companies";
import { CompanyProfilePropsInterface } from "../core/interfaces/company-profile-interface";
import companyProfileTabEnum from "../core/dictionary/company-profile-tab";
export default function CompanyProfile(props: CompanyProfilePropsInterface) {
  const [currentTab, setCurrentTab] = useState(companyProfileTabEnum.companyOverview);
  const pageTitle = props?.data?.companyShortDescription + ' - India Index';
  const pageDescription = props?.data?.companyShortDescription + ' - India Index';
  return (
    <>
      {/* Below is the code for setting up the title and description of the company */}
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta
          name="description"
          content={pageDescription} 
          key="desc"
        />
      </Head>
      {/* End of the above code */}
    <IndiaIndexLayout>
    <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
            {/* Below code is for the Company Profile Main Banner Area */}
            <MainCompanyBannerArea data={props.data}></MainCompanyBannerArea>
            {/* End of the above code */}
            {/* Below is the code for the Tab Structure */}
            <section role="tablist" aria-label="Company Profile Tabs">
              <ul className="flex flex-wrap justify-between pl-4 pr-4 items-center text-base font-medium w-full h-14 text-center rounded-2xl bg-primaryLightBg dark:bg-transparent border dark:border border-[#EAECF0] dark:border-[#1F242F] cursor-pointer">
                <li className="me-2" role="presentation" onClick={()=> setCurrentTab(companyProfileTabEnum.companyOverview)}>
                  <span className={`inline-block px-4 py-3 ${currentTab ===companyProfileTabEnum.companyOverview ? 'text-primaryDark bg-white shadow-sm rounded-lg dark:bg-primaryDarkActive dark:shadow-sm dark:text-[#CECFD2]': ''}`}  aria-current={currentTab === companyProfileTabEnum.companyOverview ? 'page' : null}>Company Overview</span>
                </li>
                <li className="me-2" role="presentation" onClick={()=> setCurrentTab(companyProfileTabEnum.certificates)}>
                  <span  className={`inline-block px-4 py-3 ${currentTab ===companyProfileTabEnum.certificates ? 'text-primaryDark bg-white shadow-sm rounded-lg dark:bg-primaryDarkActive dark:shadow-sm dark:text-[#CECFD2]': ''}`} role="tab">Certificates</span>
                </li>
                <li className="me-2" role="presentation" onClick={()=> setCurrentTab(companyProfileTabEnum.reviews)}>
                  <span  className={`inline-block px-4 py-3 ${currentTab ===companyProfileTabEnum.reviews ? 'text-primaryDark bg-white shadow-sm rounded-lg dark:bg-primaryDarkActive dark:shadow-sm dark:text-[#CECFD2]': ''}`} role="tab">Reviews</span>
                </li>
                <li className="me-2" role="presentation" onClick={()=> setCurrentTab(companyProfileTabEnum.products)}>
                  <span  className={`inline-block px-4 py-3 ${currentTab ===companyProfileTabEnum.products ? 'text-primaryDark bg-white shadow-sm rounded-lg dark:bg-primaryDarkActive dark:shadow-sm dark:text-[#CECFD2]': ''}`} role="tab">Products</span>
                </li>
              </ul>
            </section>
            {/* End of the above code */}
            {/* Below code is for the Company Over View Section */}
            {currentTab === companyProfileTabEnum.companyOverview? <CompanyOverview data={props.data}></CompanyOverview> :<></>}
            {/* End of the above code */}
            {/* Below code is for the Company Certificates Section */}
            {currentTab === companyProfileTabEnum.certificates? <CompanyCertificates data={props.data}></CompanyCertificates> : <></>}
            {/* End of the above code */}
            {/* Below code is for the Company Reviews Section */}
            {currentTab === companyProfileTabEnum.reviews? <CompanyReviews companyReviews={props?.data?.companyReviews?.[0]}></CompanyReviews> : <></>}
            {/* End of the above code */}
            {/* Below code is for the Company Products Section */}
            {currentTab === companyProfileTabEnum.products? <CompanyProducts products={props?.data?.popularProducts}></CompanyProducts> : <></>}
            {/* End of the above code */}
          </div>
          <div className="col-span-1">
              {/* Below code is for the Company Address Card Section */}
              <div role="complementary" aria-label="Company Address Card"><CompanyAddressCard companyData={props?.data}></CompanyAddressCard></div>
              {/* End of the above code */}
              {/* Below code is for the Similar Companies Section */}
              <div role="complementary" aria-label="Similar Companies Section"><SimilarCompanies similarCompanies={props?.data?.similarCompanies}></SimilarCompanies></div>
              {/* End of the above code */}
          </div>
        </div>
    </div>
    </IndiaIndexLayout>
    </>
  )
}