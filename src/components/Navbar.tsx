import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

interface Props {
  transparent?: boolean;
}

function GBNLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <path
        fill='#231F20'
        d='M16.002 30.107c7.791 0 14.107-6.316 14.107-14.107 0-7.791-6.316-14.107-14.107-14.107C8.21 1.893 1.895 8.209 1.895 16c0 7.791 6.316 14.107 14.107 14.107z'
      ></path>
      <path
        fill='#fff'
        d='M23.154 13.431c.51-.382.828-.976.828-1.656 0-1.146-.924-2.07-2.07-2.07h-6.05v2.484h6.05a.41.41 0 00.393-.414.41.41 0 00-.393-.414h-5.223v-.828h5.234c.679 0 1.23.552 1.23 1.242s-.53 1.21-1.199 1.242h-2.791v.828h2.824a1.242 1.242 0 011.168 1.231c0 .69-.552 1.242-1.232 1.242H16.69v-2.484h.827v1.656h4.396a.41.41 0 00.392-.414.41.41 0 00-.392-.414h-3.578v-1.656h-2.473v4.14h1.947v2.846l-2.465-2.846h.003v-4.141H10.59v.828h3.917v2.484h-3.736a2.897 2.897 0 01-.376-5.739c.122-.025.248-.04.376-.046h3.736v.828h-3.78a1.922 1.922 0 00-.332.056A2.074 2.074 0 008.85 13.42a2.091 2.091 0 001.922 2.07h2.909v-.828h-2.909a1.34 1.34 0 01-.376-.108 1.235 1.235 0 01-.728-1.134c0-.626.477-1.168 1.104-1.22h4.575V9.704h-4.575a3.72 3.72 0 00-3.557 3.726 3.71 3.71 0 003.557 3.715h1.4v6.646h2.484v-2.378l-.828-.955v2.506H13v-5.786h1.274l4.363 5.042v-5.042h.827v5.785h-1.273l-4.363-5.052v1.273l3.98 4.607h2.485v-6.646h1.62c1.146 0 2.07-.924 2.07-2.07 0-.679-.32-1.273-.829-1.645v.001z'
      ></path>
    </svg>
  );
}

function Navbar(props: Props): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? 'absolute top-0 z-50 w-full'
          : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
        <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
          <Link
            href='/'
            className='group flex w-full items-center gap-x-2.5'
            onClick={close}
          >
            <div className='rounded-full'>
              <GBNLogo />
            </div>

            <h6
              className={
                (props.transparent ? 'text-teal-1000' : 'text-white') +
                'title-lg mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed text-white'
              }
            >
              <span className='Gabe Brian Nick'>GBN</span> Creative
            </h6>
          </Link>
          <button
            className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <ul className='mr-auto flex list-none flex-col lg:flex-row'>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                }
                href='/'
              >
                Home
              </Link>
            </li>
          </ul>
          <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                }
                href='#pablo'
              >
                <i
                  className={
                    (props.transparent
                      ? 'text-gray-500 lg:text-gray-300'
                      : 'text-gray-500') +
                    ' fab fa-facebook leading-lg text-lg '
                  }
                />
                <span className='ml-2 inline-block lg:hidden'>Share</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                }
                href='#pablo'
              >
                <i
                  className={
                    (props.transparent
                      ? 'text-gray-500 lg:text-gray-300'
                      : 'text-gray-500') + ' fab fa-twitter leading-lg text-lg '
                  }
                />
                <span className='ml-2 inline-block lg:hidden'>Tweet</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                }
                href='#pablo'
              >
                <i
                  className={
                    (props.transparent
                      ? 'text-gray-500 lg:text-gray-300'
                      : 'text-gray-500') + ' fab fa-github leading-lg text-lg '
                  }
                />
                <span className='ml-2 inline-block lg:hidden'>Star</span>
              </a>
            </li>

            <li className='flex items-center'>
              <button
                className={
                  (props.transparent
                    ? 'bg-yellow-1000 text-gray-800 active:bg-yellow-200'
                    : 'bg-gray-600 text-white active:bg-gray-700') +
                  ' m-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0'
                }
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <i className='fa-solid fa-phone'></i>
                <span className='ml-2 inline-block lg:hidden'>Contact Us</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
