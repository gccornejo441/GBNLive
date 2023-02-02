import Image from 'next/image';
import Link from 'next/link';

import featurehero from '~/images/aboutuspage/group-of-people-sitting-indoors.jpg';

/// Page Sections
const Hero = () => (
  <div className='relative bg-teal-1000 px-8'>
    <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between py-20 md:flex-row md:py-24'>
      <div className='relative flex-shrink-0 md:w-6/12 '>
        <Link className='relative' href='/blog'>
          <Image
            alt='Overhead photo of an Island'
            src={featurehero}
            width='768'
            height='512'
            decoding='async'
            data-nimg='1'
            className='aspect-[6/4] cursor-pointer rounded-lg object-cover object-center'
            style={{ color: 'transparent' }}
          />
        </Link>
      </div>
      <div className='mt-16 md:order-first md:mt-0 md:mr-12 md:w-6/12 lg:mr-16'>
        <div className='g:py-8 text-center md:text-left'>
          <span className='text-center text-sm font-bold uppercase text-teal-1000 md:text-left'>
            About GBN
          </span>
          <h1 className='font-display mt-4 text-center text-4xl font-black tracking-wide text-white md:text-left md:text-3xl lg:text-5xl lg:leading-tight'>
            Marketing, Branding, & Design Expertise That Sets You Apart
          </h1>
          <p className='text-secondary-200 mt-4 text-center text-sm font-medium leading-relaxed md:text-left md:text-base lg:text-lg'>
            Discover how GBN Creative can help set your business apart with
            expert marketing, branding, and design solutions. Learn more today.
          </p>
          <Link href='/blog' title='Read our blog' target='_self'>
            <span className='group mt-8 inline-flex items-center justify-center rounded-full bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-yellow-1000 hover:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-800 active:text-slate-300'>
              Read Our Blog
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
