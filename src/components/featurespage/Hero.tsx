import Image from 'next/image';
import Link from 'next/link';

import featurehero from '~/images/featurespage/feature-hero-illustration.png';

/// Page Sections
const Hero = () => {
  // Hero Details: title, about, description, image, imageAlt, buttonText
  const HeroDetails = {
    title: 'Unleash Your Brand’s Potential',
    about: 'GBN Features',
    description:
      'Discover the Power of Customized Solutions, Data-Driven Insights, and Collaborative Partnerships',
    image: featurehero,
    imageAlt: 'Overhead photo of an Island',
    buttonText: 'View Pricing',
  };

  return (
    <div className='relative bg-teal-1000 px-8'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between py-20 md:flex-row md:py-24'>
        <div className='relative flex-shrink-0 md:w-6/12 '>
          <Link className='relative' href='/blog'>
            <Image
              alt={HeroDetails.imageAlt}
              src={HeroDetails.image}
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
            <span className='text-center text-sm font-bold uppercase text-gray-900 md:text-left'>
              {HeroDetails.about}
            </span>
            <h1 className='font-display mt-4 text-center text-4xl font-black tracking-wide text-white md:text-left md:text-3xl lg:text-5xl lg:leading-tight'>
              {HeroDetails.title}
            </h1>
            <p className='text-secondary-200 mt-4 text-center text-sm font-medium leading-relaxed md:text-left md:text-base lg:text-lg'>
              {HeroDetails.description}
            </p>
            <Link href='/pricing' title='View Pricing' target='_self'>
              <span className='group mt-8 inline-flex items-center justify-center rounded-full bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-yellow-1000 hover:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-800 active:text-slate-300'>
                {HeroDetails.buttonText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
