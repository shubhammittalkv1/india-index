import React from 'react';
import Image from "next/image";
const SearchField = () => {
  return <div>
  <div className="relative rounded-md shadow-sm w-80 dark:border-gray-800">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708270168/india-index/search-icon_whukn4.svg" height={15} width={15} alt="Search Icon - India Index"></Image>
    </div>
    <input type="text" name="searchField" id="searchField" className="block w-full rounded-md border-0 py-2 pl-[35px] pr-7  bg-transparent text-primaryDark ring-1 ring-inset ring-shadowBlue placeholder:text-placeHolderColor focus:ring-0 dark:focus:ring-0  sm:text-sm sm:leading-6 dark:border-gray-800" placeholder="Search for Companies and more..." role="search" />
  </div>
</div>;
};

export default SearchField;