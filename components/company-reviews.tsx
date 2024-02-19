import React from 'react';
import HeaderBorder from './global-components/header-border';
const CompanyReviews = ({companyReviews}) => {
  return (
    <section className="py-5" role="region" aria-label="Company Reviews">
      <HeaderBorder label='Reviews' imageUrl='https://res.cloudinary.com/dankrz15s/image/upload/v1708201188/india-index/review-icon_mb1pat.svg'/>
      <div className='py-5'>
          <div className='text-center pt-16 pb-8'>
            <p className='font-medium text-2xl'>{companyReviews.review}</p>
            <div className='flex justify-center pt-8'><img  src={companyReviews?.authorImage} /></div>
            <p className='pt-2 font-medium'>{companyReviews?.author}</p>
            <div className='pt-2 font-light'>{companyReviews?.authorCompanyName}</div>
          </div>
      </div>
    </section>
  );
};

export default CompanyReviews;