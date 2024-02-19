import Image from 'next/image';
import React from 'react';

const SimilarCompanyCard = ({similarCompany}) => {
  return <div className=' w-[408px] h-[178px] bg-white drop-shadow dark:bg-primaryDarkActive p-4 pt-[24px] justify-around items-center mb-6 mr-3 ml-3 rounded-2xl'>
  <div className='flex'>
  <div>
  <Image alt='previous-product' height={64} width={64} objectFit="contain" src={similarCompany?.companyLogo}/>
  </div>
  <div className='w-full'>
  <div className='flex justify-between px-3 w-full'>
    <span className='text-[20px]'>{similarCompany?.companyName}</span> 
    <span><a href={similarCompany?.companyUrl} target="_blank"><Image className='cursor-pointer' alt='redirect-to-company' height={20} width={20} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201187/india-index/redirect-to-website-icon_ehnegn.svg'}/> </a></span>
    </div>
    {similarCompany.isCompanyCertified &&
    <span className='mx-3 text-small-500 bg-blue-50 rounded-lg px-2 flex w-fit text-linkBlue mt-2'>
      <Image className='mr-2' src='https://res.cloudinary.com/dankrz15s/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1708274216/india-index/verified-100_kzlrhk.svg' alt='certified' height={16} width={16} />
      Certified</span>}
    </div>
    </div>
    <div className='text-[15px] text-placeHolderColor dark:text-gray-200 pt-4'>
    {similarCompany?.companyShortDescription.slice(0,130)}{similarCompany?.companyShortDescription?.length > 130 ? '...': ''}
    </div>
</div>
};
export default SimilarCompanyCard;