import React from 'react';
import CompanyCertificate from './global-components/company-certificate';
import Image from 'next/image';
import IndiaIndexButton from './global-components/india-index-button';
import { useIndiaIndexThemeContext } from '../core/context/theme-context';
import InfoIcon from "../assets/images/info.svg";
import themesEnum from '../core/dictionary/theme-enum';

const CompanyAddressCard = ({companyData}) => {
  const { themeValue, setThemeValue } = useIndiaIndexThemeContext();
  return (
    <section className="w-full rounded-xl bg-white drop-shadow dark:bg-primaryDarkActive" role="region" aria-label="Company Profile Address">
      <div className='w-full relative h-[120px] rounded-xl'>
        <Image className='rounded-t-xl' src={companyData?.companyCoverImage} layout='fill' objectFit="cover" quality={100} alt="Company Profile Cover Image"></Image>
      </div>
      <div className='relative w-full flex justify-center items-center bottom-[56px]'>
        <Image src={companyData?.companyLogo} height={112} width={112} alt="Company Profile Logo"></Image>
      </div>
      <div className="relative px-4 top-[-40px]">
        <h6 className="text-primaryLabelColor text-xs font-semibold ">COMPANY NAME</h6>
        <div className="flex justify-between py-2">
          <div className="flex justify-center items-center">
              <h2 className="text-2xl font-bold">{companyData?.companyName}</h2>
              <div className="cursor-pointer pl-2 pr-1">
                <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708330885/india-index/certified-company-address-icon_vinypp.svg" width={16} height={16} alt="Certified Icon"></Image>
              </div>
              <div className="cursor-pointer px-1 -mt-1">
                <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708330885/india-index/india-index-seal-icon_aavqkl.svg" width={24} height={24} alt="India Index Seal Icon"></Image>
              </div>
              <div className="cursor-pointer pl-2 -mt-1 pt-1 tooltip">
                <Image src={InfoIcon} width={16} height={16} alt="India Index Info Icon"></Image>
                <span className="tooltiptext"><span className="tooltip-heading">{companyData?.indiaIndexInformationHeading}</span>{companyData?.indiaIndexInformationContent}</span>
              </div>
          </div>
          <a className="flex justify-center items-center" href={companyData?.companyWebsite} target="_blank">
              <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201182/india-index/globe-01_lbt4ly.svg" alt="Website Icon" height={20} width={20}></Image>
          </a>
        </div>
        <h6 className="text-primaryLabelColor text-sm font-bold ">ESTABLISHED IN {companyData?.companyIncoperationYear}</h6>
        <h6 className="text-base font-normal py-4">{companyData?.companyShortDescription}</h6>
        <div className="flex">
          <Image src={themeValue === themesEnum.light ? "https://res.cloudinary.com/dankrz15s/image/upload/v1708201184/india-index/location-icon_r40mh2.svg" : "https://res.cloudinary.com/dankrz15s/image/upload/v1708330550/india-index/dark-location-icon_jcsf0d.svg"} alt="Office Location Icon" height={36} width={36}></Image>
          <div className="block px-4">
            <span className="block text-[11px] text-primaryLabelColor font-semibold">OFFICE LOCATION</span>
            <h3 className="font-medium text-base">{companyData?.companyAddress?.officeLocation.area}, {companyData?.companyAddress?.officeLocation.city}</h3>
          </div>
        </div>
        <div className="flex py-6">
          <Image src={themeValue === themesEnum.light ? "https://res.cloudinary.com/dankrz15s/image/upload/v1708201180/india-index/company-address-building-icon_gvjrlu.svg" : "https://res.cloudinary.com/dankrz15s/image/upload/v1708330567/india-index/dark-unit-icon_xqe4ia.svg"} alt="Unit Location Icon" height={36} width={36}></Image>
          <div className="block px-4">
              <span className="block text-[11px] text-primaryLabelColor font-semibold">MANUFACTURE UNIT</span>
              <h3 className="font-medium text-base">{companyData?.companyAddress?.unitLocation.city},  {companyData?.companyAddress?.unitLocation.state}</h3>
          </div>
        </div>
        <div className="flex">
          <div className="block px-4">
              <span className="block text-[10px] text-primaryLabelColor font-semibold">COMPANY TYPE</span>
              <div className="flex py-2">
                <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201180/india-index/company-address-color-building-icon-1_ayvaiv.svg" alt="Company Type Icon" height={24} width={24}></Image>
                <h3 className="pl-2 text-base font-bold">{companyData?.companyType}</h3>
              </div>
          </div>
          <div className="block px-4">
              <span className="block text-[10px] text-primaryLabelColor font-semibold">TRADE EXPERIENCE</span>
              <div className="flex py-2">
                <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708297600/india-index/globe-icon-green_x5iynn.svg" alt="Trade Experience Icon" height={24} width={24}></Image>
                <h3 className="pl-2 text-base font-bold">{companyData?.tradeExperience}</h3>
              </div>
          </div>
          <div className="block px-4">
              <span className="block text-[10px] text-primaryLabelColor font-semibold">WAREHOUSE</span>
              <div className="flex py-2">
                <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/company-card-storage-icon_knuhmi.svg" alt="Warehouse Icon" height={24} width={24}></Image>
                <h3 className="pl-2 text-base font-bold">{companyData?.wareHouse}</h3>
              </div>
          </div>
        </div>
    </div>
    {!!companyData.certificateDetails && companyData.certificateDetails.length > 0 ? 
    <CompanyCertificate certificateData={companyData.certificateDetails[0]}></CompanyCertificate>
    : <></>}
    <div className="py-2 px-4  flex justify-center items-center">
        <IndiaIndexButton redirectUrl={"https://indiaindex.com/request-information?comingFrom=company"} isWidthFull={true} buttonName="Request Information" isPrimaryButton={true} isInfoIcon={true} iconImage='https://res.cloudinary.com/dankrz15s/image/upload/v1708201183/india-index/info-circle-icon_za2jbf.svg'></IndiaIndexButton>
    </div>
    <div className="pt-2 pb-4 px-4 flex justify-center items-center">
        <IndiaIndexButton redirectUrl={"https://indiaindex.com/request-due-diligence?comingFrom=company"} isWidthFull={true} buttonName="Request Due Diligence" isPrimaryButton={false} isInfoIcon={true} iconImage={themeValue === themesEnum.light? 'https://res.cloudinary.com/dankrz15s/image/upload/v1708201182/india-index/file-attachment-02_fqqokw.svg' : 'https://res.cloudinary.com/dankrz15s/image/upload/v1708330247/india-index/dark-request-due-diligence_iss5cd.svg'}></IndiaIndexButton>
    </div>
  </section>
  );
};

export default CompanyAddressCard;