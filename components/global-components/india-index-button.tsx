import React from 'react';
import Image from "next/image";
const IndiaIndexButton = ({isWidthFull, buttonName, isPrimaryButton, isInfoIcon, iconImage, redirectUrl}) => {
  return <a href={redirectUrl}className={`cursor-pointer p-3 flex items-center rounded-md ${isPrimaryButton === true ? 'bg-buttonBlue': 'bg-transparent text-buttonBlue border-solid border-buttonBlue border-2 dark:bg-[#101828] dark:border-[#101828]'} ${isWidthFull ===true ? "w-full flex justify-center items-center" : ""}`}>{isInfoIcon === true ?<span className='px-2'><Image alt="India Index Info Icon" height={20} width={20} src={iconImage} /></span>:<></>}<span className={`${isPrimaryButton === true ? 'text-white': ' text-buttonBlue dark:text-white'}`}>{buttonName}</span></a>;
};

export default IndiaIndexButton;