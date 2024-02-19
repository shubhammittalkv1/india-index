import React from 'react';
import HeaderBorder from './global-components/header-border';
import IndiaIndexButton from './global-components/india-index-button';
import { useIndiaIndexThemeContext } from '../core/context/theme-context';
import { CompanyProfilePropsInterface } from '../core/interfaces/company-profile-interface';

const CompanyOverview = (companyData: CompanyProfilePropsInterface) => {
  const { themeValue, setThemeValue } = useIndiaIndexThemeContext();
  return (
    <section className='py-5' role="region" aria-label="Company Overview">
      <HeaderBorder label='Company Overview' imageUrl='https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/company-overview-icon_wiitoa.svg'/>
      <div className='bg-primaryLightBg p-5 mb-8 rounded-2xl dark:bg-primaryDarkActive'>
        <div className='flex items-center'>
          <img src={!!themeValue && themeValue === "light"? 'https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/about-company-icon_giun2s.svg' : "https://res.cloudinary.com/dankrz15s/image/upload/v1708293418/india-index/dark-overview-icon_pazzqx.svg"} />
          <h3 className='font-semibold text-xl ml-2'>About {companyData.data.companyFriendlyName}</h3>
        </div>
        <p className='px-5 pt-4 text-sm'>{companyData.data.companyLongDescription}</p>
      </div>
      <div className='flex justify-around'>
          <div>
            <div className='font-semibold text-[#98A2B3] dark:text-gray-100 text-[11px]'>Nature of Business</div>
            <div className='font-bold text-[#344054] dark:text-gray-400 text-base pt-2'>{companyData.data.natureOfBusiness}</div>
          </div>
          <div>
            <div className='font-semibold text-[#98A2B3] dark:text-gray-100 text-[11px]'>Annual Turnover</div>
            <div className='font-bold text-[#344054] dark:text-gray-400 text-base pt-2'>{companyData.data.annualTurnOver.currency}{companyData.data.annualTurnOver.min} - {companyData.data.annualTurnOver.currency}{companyData.data.annualTurnOver.max} {companyData.data.annualTurnOver.unit}</div>
          </div>
          <div>
            <div className='font-semibold text-[#98A2B3] dark:text-gray-100 text-[11px]'>Import Export code</div>
            <div className='font-bold text-[#344054] dark:text-gray-400 text-base pt-2'>{companyData.data.importExportCodeInitials}*****</div>
          </div>
      </div>
      <div className='flex justify-around pt-10'>
        {companyData.data.companyEmployeDetails.map((item, index)=> (
          <div className='flex items-center' key={index}>
            <div>
                <img src={item.employeImageUrl} />
            </div>
            <div className='px-5'>
                <div className='font-bold text-lg dark:text-gray-100'>
                  {item.employeName}
                </div>
                <div className='font-bold text-[#1947C4] dark:text-success'>
                  {item.employeDesignation}
                </div>
            </div>
          </div>
        )
      )}
    </div>
    <div className='flex pt-10 items-center justify-between'>
      <div className='flex items-center'>
         <div className='flex h-10'>
            <img className='rounded-full' src='https://res.cloudinary.com/dankrz15s/image/upload/v1708276471/india-index/team-01_bbokqm.jpg' />
            <img className='rounded-full relative right-[12px]' src='https://res.cloudinary.com/dankrz15s/image/upload/v1708276471/india-index/team-02_xneaqg.jpg' />
            <img className='rounded-full relative right-[24px]' src='https://res.cloudinary.com/dankrz15s/image/upload/v1708276471/india-index/team-03_amgeal.jpg' />
            <span className='rounded-full w-11 h-11 border relative right-[36px] justify-center items-center flex bg-teamBackground dark:bg-primaryDarkActive dark:border-primaryDarkActive'>+5</span>
         </div>
         <div>
            <div className='font-semibold text-xl text-[#1D2939] dark:text-gray-100'>Reach out to our team</div>
            <div className='font-normal text-[#475467] dark:text-gray-400'>We typically responds within 24 hours</div>
         </div>
      </div>
      <div>
         <IndiaIndexButton redirectUrl={"https://indiaindex.com/request-information?comingFrom=company"} isWidthFull={false} buttonName="Request Information" isPrimaryButton={true} isInfoIcon={true} iconImage='https://res.cloudinary.com/dankrz15s/image/upload/v1708201183/india-index/info-circle-icon_za2jbf.svg'></IndiaIndexButton>
      </div>
    </div>
  </section>
  );
};

export default CompanyOverview;