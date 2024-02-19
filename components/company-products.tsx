import React, { useEffect, useState } from 'react';
import ProductCard from './global-components/product-card';
import Image from 'next/image';
import HeaderBorder from './global-components/header-border';
import { useIndiaIndexThemeContext } from '../core/context/theme-context';
// Below code is used for Scrolling user to Right
const scrollToRight = ()=>{
  const element = document.getElementById('product-card-container');
  element.scrollTo({left: 280, behavior: 'smooth'});
}
// End of the above code
// Below code is used for Scrolling user to Left
const scrollToLeft = ()=>{
  const element = document.getElementById('product-card-container');
  element.scrollTo({left: 0, behavior: 'smooth'});
}
// End of the above code
const CompanyProducts = ({products}) => {
  const { themeValue, setThemeValue } = useIndiaIndexThemeContext();
  const [cardData, setCardData] = useState([])
  // Below method is used at the mounting state
  useEffect(()=>{
    setCardData(JSON.parse(JSON.stringify(products)))
  }, [])
  // End of the above code
  // Below code is used when user click on bookmark the product
  const handleBookmark = (isBookmarked : boolean, id : number) =>{
    let tempCardData = JSON.parse(JSON.stringify(cardData));
    for (let i =0; i< tempCardData.length ; i++){
      if (tempCardData[i].id === id){
        tempCardData[i].isBookMarked = isBookmarked;
        break;
      }
    }
    setCardData(JSON.parse(JSON.stringify(tempCardData)))
  }
  // End of the above code
  return (
    <section className="py-5" aria-label="Company Products">
      {/* Below component is used for Creating sepration of the heading */}
      <HeaderBorder label='Products' imageUrl='https://res.cloudinary.com/dankrz15s/image/upload/v1708201187/india-index/product-icon_p4vait.svg'/>
      {/* End of the above code */}
      <div className='bg-gray-50 p-4 rounded-2xl dark:bg-bgGray'>
          <div className='mb-7 mt-3 flex justify-between'>
            <span className='flex'>
              <Image alt='previous-product' height={28} width={28} objectFit="contain" src={!!themeValue && themeValue === "light" ? 'https://res.cloudinary.com/dankrz15s/image/upload/v1708201185/india-index/popular-products-icon_vqfv6e.svg' : 'https://res.cloudinary.com/dankrz15s/image/upload/v1708293861/india-index/dark-products-icon_sccrhu.svg'}/>
              <span className='text-h2-600 ms-4'>Popular Products</span>
            </span>
            <span className='flex h-6 rounded'>
                <span className='mr-4 cursor-pointer hover:bg-gray-200 flex items-center justify-center' onClick={()=>
                  scrollToLeft()} aria-label="Scroll Left">
                  <Image alt='previous-product' height={20} width={20} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708274022/india-index/chevron-left_n7ayoa.svg'}/>
                </span>
                <span className='cursor-pointer hover:bg-gray-200 flex items-center justify-center' onClick={()=>
                  scrollToRight()} aria-label="Scroll Right">
                  <Image alt='next-product' height={20} width={20} objectFit="contain" src={'https://res.cloudinary.com/dankrz15s/image/upload/v1708274023/india-index/chevron-right_mj1rtj.svg'}/>
                </span>
            </span>
          </div>
          {/* Below code is used for Displaying the Products */}
          <div className='flex flex-row overflow-x-auto' id='product-card-container' role="list">
            {cardData.map((item)=>  <ProductCard productData={item} handleBookmark={(isBookmarked : boolean, id : number)=>handleBookmark(isBookmarked, id)} />)}
          </div>
          {/* End of the above code */}
      </div>
    </section>
  );
};

export default CompanyProducts;