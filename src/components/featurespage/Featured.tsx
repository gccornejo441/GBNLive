import Image from 'next/image';
import React from 'react';

import map from '~/images/featurespage/map.webp';

const Featured = () => {
  return (
    <section>
      <div className='group mb-[30px] flex rounded-[8px] p-[20px] transition-all hover:bg-[#F5F9F8] hover:drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] xl:p-[35px]'>
        <Image
          className='mr-[20px] self-center sm:mr-[40px] sm:mb-[15px] lg:mr-[20px] lg:mb-0 xl:mr-[40px]'
          src={map}
          width='40'
          height='55'
          loading='lazy'
          alt='image icon'
        />
        <div className='flex-1'>
          <h4 className='font-lora group-hover:text-secondary text-primary mb-[10px] text-[28px] leading-none group-hover:transition-all'>
            Address <span className='text-secondary'>.</span>
          </h4>
          <p className='text-[18px] font-light lg:max-w-[230px]'>
            2104 Charmaine Lane Amarillo, New York
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
