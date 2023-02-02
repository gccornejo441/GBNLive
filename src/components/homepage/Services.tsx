import Image from 'next/image';

function Icon() {
  return (
    <svg fill='none' aria-hidden='true' className='h-9 w-9'>
      <defs>
        <linearGradient
          id=':rc:'
          x1='11.5'
          x2='36'
          y1='18'
          y2='15.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.194' stopColor='#fff'></stop>
          <stop offset='1' stopColor='#6692F1'></stop>
        </linearGradient>
      </defs>
      <path
        stroke='url(#:rc:)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M30 15l-4 5-4-11-4 18-4-11-4 7-4-5'
      ></path>
    </svg>
  );
}

const cardWrite = [
  {
    id: 0,
    title: 'Marketing',
    subtitle:
      "Maximizing Your Business's Potential with Multi-Tiered Marketing Campaigns",
    discription:
      "Our agency helps grow clients' businesses by providing customized solutions and multi-tiered marketing campaigns to reach target audiences effectively and increase revenue. Our team of experts work with clients to develop a plan for success.",
  },
  {
    id: 1,
    title: 'Branding',
    subtitle: 'Brand Identity is Our Passion: Crafting Exceptional Experiences',
    discription:
      "Our agency specializes in managing all aspects of clients' brand identity through advertising, design, and media to achieve measurable results and help their business grow. We offer full-service brand management and help clients stand out from the competition.",
  },
  {
    id: 2,
    title: 'Design',
    subtitle: 'Crafting Visually Stunning and Impactful Designs for Your Brand',
    discription:
      "Our agency believes in the power of design to create exceptional experiences and pour hearts and souls into every project to craft visually stunning and impactful designs that help clients stand out. We offer full-service design to bring clients' brand to life.",
  },
];

function CardComponent() {
  return (
    <>
      {cardWrite.map((item) => {
        return (
          <div
            key={item.id}
            className='relative my-10 rounded-lg bg-white p-5 text-center shadow-lg md:my-0 xl:text-left'
          >
            <div className='flex justify-center xl:justify-start'>
              <div className='w-9 rounded-lg bg-teal-1000'>
                <Icon />
              </div>
            </div>
            <h3 className='mt-6 text-sm font-medium text-teal-1000'>
              {item.title}
            </h3>
            <p className='font-display mt-2 min-h-[110px] text-xl text-black lg:min-h-fit'>
              {item.subtitle}
            </p>
            <p className='mt-4 text-sm text-gray-700'>{item.discription}</p>
          </div>
        );
      })}
    </>
  );
}

const Services = () => (
  <section className='-mt-24 bg-blue-gray-100 pb-20'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap'>
        <div className='my-20 block lg:mt-20'>
          <div
            className='mx-auto grid w-full gap-x-16 gap-y-16 md:w-1/2 lg:w-full lg:grid-cols-3 xl:gap-x-40 '
            role='tablist'
            aria-orientation='horizontal'
          >
            <CardComponent />
          </div>
        </div>
      </div>

      <div className='mt-32 flex flex-wrap items-center'>
        <div className='mr-auto ml-auto w-full px-4 md:w-5/12'>
          <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-1000 p-3 text-center text-white shadow-lg'>
            <i className='fas fa-user-friends text-xl'></i>
          </div>
          <h3 className='mb-2 text-3xl font-semibold leading-normal'>
            At our company, we specialize in creating memorable experiences,
            websites, and brands.
          </h3>
          <p className='mt-4 text-lg font-light leading-relaxed text-gray-700'>
            Our talented team is able to turn even the most imaginative ideas
            into beautiful designs, captivating experiences, and powerful
            brands.
          </p>
          <div className='mb-10 flex justify-start'>
            <div className='inline-flex flex-wrap justify-center gap-4'>
              <div className='relative mt-10 flex justify-center gap-x-6'>
                <a
                  className='group inline-flex items-center justify-center rounded-full bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-teal-1000 hover:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-800 active:text-slate-300'
                  href='/register'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mr-auto ml-auto w-full px-4 md:w-4/12'>
          <div className='relative mb-6 flex w-full min-w-0  flex-col break-words rounded-lg bg-teal-1000 shadow-lg'>
            <Image
              alt='...'
              width={1051}
              height={80}
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
              className='w-full rounded-t-lg align-middle'
            />
            <blockquote className='relative mb-4 p-8'>
              <svg
                preserveAspectRatio='none'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 583 95'
                className='absolute left-0 block w-full'
                style={{
                  height: '95px',
                  top: '-94px',
                }}
              >
                <polygon
                  points='-30,95 583,95 583,65'
                  className='fill-current text-teal-1000'
                ></polygon>
              </svg>
              <h4 className='text-xl font-bold text-white'>
                Crafting Unique Experiences
              </h4>
              <p className='text-md mt-2 font-light text-white'>
                Our team of experts, who are proficient in the latest
                technologies and platforms, will work closely with you to create
                a customized solution that is truly unique.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
