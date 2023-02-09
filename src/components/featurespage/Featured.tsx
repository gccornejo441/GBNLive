import Image from 'next/image';
import React from 'react';

const ContactCard = () => {
  const addressInfo = {
    image: './images/featurespage/map.svg',
    title: 'Address',
    description: '123 Nearyou Street, CA 92222',
  };

  const phoneInfo = {
    image: './images/featurespage/phone.svg',
    title: 'Call us',
    phone: {
      number: '(555) 555-5555',
      href: 'tel:5555555555',
    },
  };

  const emailInfo = {
    image: './images/featurespage/mail.svg',
    title: 'Email us',
    email: {
      email1: 'gcornejo@gbncreative.com',
      email1Href: 'mailto:gcornejo@gbncreative.com',
      email2: 'info@gbncreative.com',
      email2Href: 'mailto:info@gbncreative.com',
    },
  };

  return (
    <section className='mt-32 w-full overflow-hidden lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='col-span-1 mb-[-30px] grid gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3'>
          <div className='group mb-[30px] flex rounded-[8px] p-[20px] transition-all hover:bg-[#F5F9F8] hover:drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] xl:p-[35px]'>
            <Image
              src={addressInfo.image}
              width={46}
              height={46}
              loading='lazy'
              alt='image icon'
              className='mr-[20px] self-center sm:mr-[40px] sm:mb-[15px] lg:mr-[20px] lg:mb-0 xl:mr-[40px]'
            />
            <div className='flex-1'>
              <h4 className='font-lora text-primary mb-[10px] text-[28px] leading-none group-hover:text-teal-1000 group-hover:transition-all'>
                {addressInfo.title} <span className='text-teal-1000'>.</span>
              </h4>
              <p className='text-[18px] font-light lg:max-w-[230px]'>
                <a
                  href='https://goo.gl/maps/6Z5Z1Z1Z1Z1Z1Z1Z9'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-teal-1000'
                >
                  {addressInfo.description}
                </a>
              </p>
            </div>
          </div>
          <div className='group mb-[30px] flex rounded-[8px] p-[20px] transition-all hover:bg-[#F5F9F8] hover:drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] xl:p-[35px]'>
            <Image
              src={phoneInfo.image}
              width={46}
              height={46}
              loading='lazy'
              alt='image icon'
              className='mr-[20px] self-center sm:mr-[40px] sm:mb-[15px] lg:mr-[20px] lg:mb-0 xl:mr-[40px]'
            />
            <div className='flex-1'>
              <h4 className='font-lora text-primary mb-[10px] text-[28px] leading-none group-hover:text-teal-1000 group-hover:transition-all'>
                {phoneInfo.title} <span className='text-teal-1000'>.</span>
              </h4>
              <p className='text-[18px] font-light lg:max-w-[230px]'>
                <a href={phoneInfo.phone.href} className='hover:text-teal-1000'>
                  {phoneInfo.phone.number}
                </a>
              </p>
            </div>
          </div>
          <div className='group mb-[30px] flex rounded-[8px] p-[20px] transition-all hover:bg-[#F5F9F8] hover:drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] xl:p-[35px] xl:pl-[65px]'>
            <Image
              src={emailInfo.image}
              width={46}
              height={46}
              loading='lazy'
              alt='image icon'
              className='mr-[20px] self-center sm:mr-[40px] sm:mb-[15px] lg:mr-[20px] lg:mb-0 xl:mr-[40px]'
            />
            <div className='flex-1'>
              <h4 className='font-lora text-primary mb-[10px] text-[28px] leading-none group-hover:text-teal-1000 group-hover:transition-all'>
                {emailInfo.title} <span className='text-teal-1000'>.</span>
              </h4>
              <p className='flex flex-col text-[18px] font-light lg:max-w-[230px]'>
                <a
                  href={emailInfo.email.email1Href}
                  className='hover:text-teal-1000'
                >
                  {emailInfo.email.email1}
                </a>
                <a
                  href={emailInfo.email.email2Href}
                  className='hover:text-teal-1000'
                >
                  {emailInfo.email.email2}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Featured = () => {
  return (
    <section className='mt-32 w-full overflow-hidden'>
      <div className='flex justify-center'>
        <div className='p-5 lg:container lg:flex lg:flex-row'>
          <div className='mb-10 flex flex-row items-center lg:mx-10 lg:mb-0 lg:w-1/2 lg:justify-center'>
            <div>
              <div className='max-w-2xl'>
                <h2 className='text-base font-semibold leading-7 text-black'>
                  Use Client-first
                </h2>
                <p className='mt-4 text-4xl  font-bold text-slate-900 sm:leading-[56px] lg:pr-10'>
                  The preferred choice of top agencies and freelancers worldwide
                </p>
              </div>
              <div className='max-w-xl'>
                <p className='mt-4 text-base leading-7 text-teal-1000'>
                  Our commitment to putting our clients' needs first, combined
                  with our expertise and customized solutions, sets us apart as
                  the trusted partner for businesses seeking to maximize their
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:mx-10'>
            <Image
              src='https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              width='1260'
              height='750'
              loading='lazy'
              alt='featured image'
            />
          </div>
        </div>
      </div>

      <ContactCard />
    </section>
  );
};

export default Featured;
