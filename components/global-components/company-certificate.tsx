import Image from 'next/image';
import React from 'react';
const CompanyCertificate = ({certificateData}) => {
  return (
    <div className='flex w-[384px] h-[104px] bg-gray-50 dark:bg-primaryDarkActive p-4 justify-around items-center mb-6 mr-3 ml-3 rounded-2xl' role="listitem" aria-label={`${certificateData?.certificateName} certificate`}>
      <div>
          <Image alt='certificate-logo' height={64} width={64} objectFit="contain" src={certificateData?.certificateLogo}/>
      </div>
      <div className='flex flex-col px-3'>
          <span className='text-large-600'>
            {certificateData?.isIndexIndiaCertificate ?
            <span className='flex text-linkBlue'>
                <Image className='mr-2' alt='index-india-logo' height={15} width={100} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201182/india-index/india-index-logo_dppkzm.svg'}/>
                Certified 
                <Image className='ml-1' alt='certified-icon' height={14} width={14} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201182/india-index/india-index-certified-icon_qstxwv.svg'}/>
            </span>
            : certificateData?.certificateName}
          </span>
          <span className='text-small-400 text-placeHolderColor dark:text-gray-200'>{certificateData?.certificateDescription.slice(0,30)}{certificateData?.certificateDescription?.length > 30 ? '...': ''}</span>
          <span className='text-small-700 text-success'>{`Valid for ${certificateData?.isLifeTime ? 'Life-time' : `FY ${certificateData?.validityStart}-${certificateData?.validityEnd}`}`}</span>    
      </div>
      <div className='flex items-start justify-start h-full mt-5'>
          <a href={certificateData?.certificateUrl} target="_blank"><Image className='cursor-pointer' alt='redirect-to-website-icon' height={20} width={20} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201187/india-index/redirect-to-website-icon_ehnegn.svg'}/></a>
      </div>
    </div>
  );
};

export default CompanyCertificate;