"use client";
import React from 'react';
import { HeaderBorderProps } from '../../core/interfaces/header-border-interface';
const HeaderBorder = ({label, imageUrl}: HeaderBorderProps) => {
  return (
    <div className='py-5'>
      <div className='flex items-center'>
          <hr className='w-[4%]'>
          </hr>
          <div className='px-5 flex'>
            <img src={imageUrl} />
            <h2 className='px-2 text-xl whitespace-nowrap'>{label}</h2>
          </div>
          <hr className='w-full'>
          </hr>
      </div>
    </div>
  );
};

export default HeaderBorder;