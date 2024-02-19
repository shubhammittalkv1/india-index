import React, { useState } from 'react';
import Image from "next/image";
import { useIndiaIndexThemeContext } from '../../core/context/theme-context';
import themesEnum from '../../core/dictionary/theme-enum';
import SearchField from '../../components/global-components/search-field';
import Moon from "../../assets/images/moon.svg";
import Sun from "../../assets/images/sun.svg";
const IndiaIndexHeader = () => {
  const { themeValue, setThemeValue } = useIndiaIndexThemeContext();
  const toggleTheme = (event)=> {
    if(!!event){
      event.preventDefault()
    }
    const toggledTheme = themeValue === themesEnum.light? themesEnum.dark: themesEnum.light;
    localStorage.setItem("currentTheme", toggledTheme);
    setThemeValue(toggledTheme);
  }
  return <>
    <header className="pt-6 pb-6" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201182/india-index/india-index-logo_dppkzm.svg" width={207} height={24} alt="India Index Logo"></Image>
        <div className="mr-auto" role="navigation">
          <ul className="flex space-x-4 pl-[20px]"role="menubar">
            <li><a href="#" className="text-base font-medium p-2 hover:rounded-standard hover:bg-gray-100 dark:hover:bg-primaryDarkHoverColor">Home</a></li>
            <li><a href="#" className="text-base font-medium rounded-standard bg-gray-100 dark:bg-transparent p-2">My Requirement</a></li>
            <li><a href="#" className="text-base font-medium p-2 hover:rounded-standard hover:bg-gray-100 dark:hover:bg-primaryDarkHoverColor">Bookmark</a></li>
          </ul>
        </div>
        <nav role="navigation">
          <ul className="flex space-x-4">
            <li><SearchField></SearchField></li>
            <li className="w-10 h-10 flex justify-center align-middle items-center hover:bg-gray-100 hover:rounded dark:bg-transparent"><Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708273944/india-index/message-icon_qjtyvl.png" width={20} height={20} alt="Message Icon -  India Index"></Image></li>
            <li className="w-10 h-10 flex justify-center align-middle items-center hover:bg-gray-100 hover:rounded dark:bg-transparent" onClick={(event)=>toggleTheme(event)}>{themeValue === "light"? <Image className="cursor-pointer" src={Moon} alt="Moon Icon - India Index" width={20} height={20}></Image>: <Image className="cursor-pointer" src={Sun} alt="Sun Icon - India Index" width={25} height={25} ></Image>}</li>
            <li className="w-10 h-10 flex justify-center align-middle items-center " ><Image src="https://res.cloudinary.com/dankrz15s/image/upload/v1708274960/india-index/user-avatar_cfan1o.svg" width={40} height={40} alt="Message Icon -  India Index"></Image></li>
          </ul>
        </nav>
      </div>
    </header>

</>;
};

export default IndiaIndexHeader;