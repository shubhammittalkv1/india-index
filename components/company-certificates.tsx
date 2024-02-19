import React from 'react';
import CompanyCertificate from './global-components/company-certificate';
import HeaderBorder from './global-components/header-border';
import { CompanyProfilePropsInterface } from '../core/interfaces/company-profile-interface';
const CompanyCertificates = (companyData: CompanyProfilePropsInterface) => {
  console.log(companyData,'certificates')
  return (
    <section className="py-5" role="region" aria-label="Company Certificates">
      <HeaderBorder label='Certificates' imageUrl='https://res.cloudinary.com/dankrz15s/image/upload/v1708201180/india-index/certificate-icon-1_dq3z2d.svg'/>
      <div className='flex flex-wrap justify-center items-center py-7'>
          {companyData?.data?.certificateDetails.map((element)=>
          <CompanyCertificate certificateData={element}/>
          )}
      </div>
    </section>
  );
};

export default CompanyCertificates;