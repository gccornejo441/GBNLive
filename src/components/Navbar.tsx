import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

interface Props {
  transparent?: boolean;
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
          <a
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' title-lg mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed'
            }
            href='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
          >
            GBN Creative
          </a>
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
