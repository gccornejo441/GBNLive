import Image from 'next/image';

import guypointingimg from '~/images/aboutuspage/rodnae-productions.jpg';

const Services = () => (
  <section className='bg-white pb-20'>
    <div className='mx-auto my-20 px-4 lg:w-[980px] xl:w-[1280px]'>
      <div className='flex flex-wrap justify-center'>
        <div className='ld:h-[340px] flex w-fit flex-col bg-blue-gray-100 py-10 px-3 lg:flex-row lg:px-8 lg:py-20 xl:px-24'>
          <div className='mx-5 '>
            <h4 className='text-left text-sm font-normal leading-7 text-teal-1000 lg:text-base'>
              Who we are
            </h4>
            <h3 className='whitespace-nowrap py-3 text-left text-2xl font-semibold  leading-10 text-teal-1000 md:text-3xl xl:text-4xl'>
              Goal Focused
            </h3>
            <p className='text-left font-normal not-italic leading-7 text-teal-1000 md:text-sm xl:text-base'>
              GBN Creative provides tailored marketing, branding, and design
              solutions to help you reach your business goals. Find the perfect
              strategy for your business today.
            </p>
          </div>
          <div className='mx-5'>
            <div className='my-7'></div>
            <h3 className='whitespace-nowrap py-3 text-left text-2xl font-semibold leading-10 text-teal-1000 md:text-3xl xl:text-4xl'>
              Continuous Improvement
            </h3>
            <p className='text-left font-normal not-italic leading-7 text-teal-1000 md:text-sm xl:text-base'>
              Stay ahead of the competition with GBN Creative's continuous
              improvement approach to marketing, branding, and design. Get
              expert guidance and the tools you need to take your business
              further.
            </p>
          </div>
        </div>
        <div className='w-min-[1280px] relative lg:h-[340px]'>
          <Image
            src={guypointingimg}
            alt='Guy pointing at a screen'
            quality={100}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;
