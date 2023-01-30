import Image from 'next/image';

const Featured = () => (
  <section className='relative py-20'>
    <div
      className='pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden'
      style={{ height: '80px' }}
    >
      <svg
        className='absolute bottom-0 overflow-hidden'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 2560 100'
        x='0'
        y='0'
      >
        <polygon
          className='fill-current text-white'
          points='2560 0 2560 100 0 100'
        ></polygon>
      </svg>
    </div>

    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap items-center'>
        <div className='ml-auto mr-auto w-full px-4 md:w-4/12'>
          <Image
            alt='...'
            width={634}
            height={951}
            className='max-w-full rounded-lg shadow-lg'
            src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          />
        </div>
        <div className='ml-auto mr-auto w-full px-4 md:w-5/12'>
          <div className='md:pr-12'>
            <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-1000 p-3 text-center text-white shadow-lg'>
              <i className='fas fa-rocket text-xl'></i>
            </div>
            <h3 className='text-3xl font-semibold'>
              Tailored Web Solutions for Every Challenge
            </h3>
            <p className='mt-4 text-lg leading-relaxed text-gray-600'>
              We offer a range of web solutions that are adaptable to any
              platform and environment. No matter the challenge, we're dedicated
              to finding the perfect solution for you.
            </p>
            <ul className='mt-6 list-none'>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='mr-3 inline-block rounded-full bg-teal-1000 py-1 px-2 text-xs font-semibold uppercase text-white'>
                      <i className='fas fa-fingerprint'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='mr-3 inline-block rounded-full bg-teal-1000 py-1 px-2 text-xs font-semibold uppercase text-white'>
                      <i className='fab fa-html5'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='mr-3 inline-block rounded-full bg-teal-1000 py-1 px-2 text-xs font-semibold uppercase text-white'>
                      <i className='far fa-paper-plane'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
