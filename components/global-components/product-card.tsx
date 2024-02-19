"use client";
import Image from 'next/image';
import React from 'react';
import { ProductCardProps } from '../../core/interfaces/product-card-interface';
const ProductCard = ({productData, handleBookmark}: ProductCardProps) => {
  return (
    <div className='h-[316px] w-[342px] bg-white dark:bg-darkGray mr-4 rounded p-3' key={productData.id} role="listitem" aria-label={`${productData.productName}, ${productData.productCurrency}${productData.productMinPrice} - ${productData.productCurrency}${productData.productMaxPrice}, minimum order ${productData.productMinOrderUnit} units`}>
      <div className='h-[144px] relative w-[330px]'>
          <Image alt='product-image' layout='fill' objectFit="cover" quality={100}  src={productData.productImage}/>
      </div>
      <div className='flex justify-between relative bottom-10 h-7'>
          {productData.isVerified &&
          <span className='flex justify-center items-center bg-wheatWhite px-2 rounded-lg h-6 text-small-400 text-linkBlue'>
            <Image className='mr-2' alt='product-image' width={20} height={20} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1708274216/india-index/verified-100_kzlrhk.svg'}/>
            Verified
          </span>
          }
          {productData.isBookMarked ? 
          <Image className='cursor-pointer' onClick={()=>
          {handleBookmark(false, productData.id)}} alt='product-image' width={36} height={36} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/bookmarked-icon_zq5sdv.svg'}/> :
          <Image className='cursor-pointer' onClick={()=>
          {handleBookmark(true, productData.id)}} alt='product-image' width={36} height={36} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708201178/india-index/bookmark-icon_elatjc.svg'}/>}
      </div>
      <div className='w-[342px]'>
          <div className='mb-3'>
            <span className='text-h3-500'>{productData.productCurrency}{productData.productMinPrice} - {productData.productCurrency}{productData.productMaxPrice}</span>
            <span className='text-small-400 ms-3 text-placeHolderColor'>
            min order {productData.productMinOrderUnit} units
            </span>
          </div>
          <div className='text-regular-400 text-linkBlue dark:text-gray-500'>
            {productData.productCategories.join(' - ')}
          </div>
          <div className='text-h3-500 mb-2'>
            {productData.productName}
          </div>
      </div>
    </div>
  );
};

export default ProductCard;