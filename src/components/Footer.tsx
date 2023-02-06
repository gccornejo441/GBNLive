import React, { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <footer className='relative bg-white pt-8 '>
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
        <div className='flex flex-wrap'>
          <div className='w-full px-4 lg:w-6/12'>
            <h4 className='text-3xl font-semibold'>Let's keep in touch!</h4>
            <h5 className='mt-0 mb-2 text-lg text-gray-700'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className='mt-6'>
              <button
                className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-blue-400 shadow-lg outline-none focus:outline-none'
                type='button'
              >
                <i className='fab fa-twitter flex justify-center'></i>
              </button>
              <button
                className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-blue-600 shadow-lg outline-none focus:outline-none'
                type='button'
              >
                <i className='fab fa-facebook-square flex justify-center'></i>
              </button>
              <button
                className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none'
                type='button'
              >
                <i className='fab fa-dribbble flex justify-center'></i>
              </button>
              <button
                className='align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-gray-900 shadow-lg outline-none focus:outline-none'
                type='button'
              >
                <i className='fab fa-github flex justify-center'></i>
              </button>
            </div>
          </div>
          {/* <div className='w-full px-4 lg:w-6/12'>
            <div className='items-top mb-6 flex flex-wrap'>
              <div className='ml-auto w-full px-4 lg:w-4/12'>
                <span className='mb-2 block text-sm font-semibold uppercase text-gray-600'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://www.creative-tim.com/presentation'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://blog.creative-tim.com'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://www.github.com/creativetimofficial'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://www.creative-tim.com/bootstrap-themes/free'
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full px-4 lg:w-4/12'>
                <span className='mb-2 block text-sm font-semibold uppercase text-gray-600'>
                  Other Resources
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md'
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://creative-tim.com/terms'
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://creative-tim.com/privacy'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className='block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900'
                      href='https://creative-tim.com/contact-us'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <hr className='my-6 border-white' />
      </div>
      <div className='flex flex-wrap items-center justify-center bg-white py-5 md:justify-between'>
        <div className='mx-auto w-full px-4 text-center md:w-4/12'>
          <div className='py-1 text-sm font-semibold text-gray-600'>
            Copyright © {new Date().getFullYear()} GBN Creative By{' '}
            <a
              href='https://www.webworksdreams.com'
              className='text-gray-600 hover:text-gray-900'
            >
              WebWorks Dreams
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
