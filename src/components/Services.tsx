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
    subtitle: 'Design is Our Passion: Crafting Exceptional Experiences',
    discription:
      "Our agency specializes in managing all aspects of clients' brand identity through advertising, design, and media to achieve measurable results and help their business grow. We offer full-service brand management and help clients stand out from the competition.",
  },
  {
    id: 2,
    title: 'Design',
    subtitle:
      'Stay on top of things with always up-to-date reporting features.',
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
            className='relative my-10 rounded-lg bg-white p-5 text-center md:my-0 xl:text-left'
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
  <section className='-mt-24 bg-gray-300 pb-20'>
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
          <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-3 text-center text-gray-600 shadow-lg'>
            <i className='fas fa-user-friends text-xl'></i>
          </div>
          <h3 className='mb-2 text-3xl font-semibold leading-normal'>
            Working with us is a pleasure
          </h3>
          <p className='mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700'>
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p className='mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700'>
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
            className='mt-8 font-bold text-gray-800'
          >
            Check Tailwind Starter Kit!
          </a>
        </div>

        <div className='mr-auto ml-auto w-full px-4 md:w-4/12'>
          <div className='relative mb-6 flex w-full min-w-0  flex-col break-words rounded-lg bg-pink-600 shadow-lg'>
            <Image
              alt='...'
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
                  className='fill-current text-pink-600'
                ></polygon>
              </svg>
              <h4 className='text-xl font-bold text-white'>
                Top Notch Services
              </h4>
              <p className='text-md mt-2 font-light text-white'>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
