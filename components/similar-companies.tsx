import React from 'react';
import SimilarCompanyCard from './global-components/similar-company-card';
import Image from 'next/image';

const SimilarCompanies = ({similarCompanies}) => {
  return (
    <div className='flex items-center flex-col mt-12' role="region" aria-label="Similar Trusted Suppliers">
      <div className='flex w-full justify-between'>
          <hr className='w-[17%]'>
          </hr>
          <div className='relative bottom-3 flex'>
            <Image alt='star-icon' height={16} width={16} src='https://res.cloudinary.com/dankrz15s/image/upload/v170171178/india-index/asterisk-01_nfdoak.svg'/>
            <span className='px-2'>Similar Trusted Suppliers</span>
            <Image alt='star-icon' height={16} width={16} src='https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/asterisk-01_nfdoak.svg'/>
          </div>
          <hr className='w-[17%]'>
          </hr>
      </div>
      <div className='flex flex-col mt-5 pt-4' role="list">
          {similarCompanies?.map((item, index)=>(<span key={index} role="listitem">
            <SimilarCompanyCard similarCompany={item} />
          </span>))}
      </div>
    </div>
  );
};

export default SimilarCompanies;