import React from 'react';
import Carousel from "../components/global-components/company-corosal.jsx";
import { CompanyProfilePropsInterface } from '../core/interfaces/company-profile-interface.jsx';
const MainCompanyBannerArea = (companyData: CompanyProfilePropsInterface) => {
  return (
  <section role="region" aria-label="Company Profile Main Area">
    <div className="rounded-2xl">
      {/* Below component renders our Carosol element */}
      <Carousel aria-label="Image Carousel"></Carousel>
      {/* End the above code */}
    </div>
    <div className="py-6">
      <h1 className="text-2xl font-medium">Our manufacturing unit in {companyData?.data?.companyAddress?.unitLocation?.city}, {companyData?.data?.companyAddress?.unitLocation?.state}</h1>
      <h6 className="text-sm font-medium text-placeHolderColor py-2">Uploaded in {companyData?.data?.uplodedAt}</h6>
    </div>
  </section>);
};

export default MainCompanyBannerArea;