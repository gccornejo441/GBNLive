import Image from 'next/image';

import team1 from '~/images/team-1-800x800.jpg';
import team2 from '~/images/team-2-800x800.jpg';
import team3 from '~/images/team-3-800x800.jpg';
import team4 from '~/images/team-4-470x470.png';

const Team = () => (
  <section className='pt-20 pb-48'>
    <div className='container mx-auto px-4'>
      <div className='mb-24 flex flex-wrap justify-center text-center'>
        <div className='w-full px-4 lg:w-6/12'>
          <h2 className='text-4xl font-semibold'>Here are our heroes</h2>
          <p className='m-4 text-lg leading-relaxed text-gray-600'>
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
          <div className='px-6'>
            <Image
              alt='...'
              src={team1}
              width={800}
              height={800}
              className='mx-auto max-w-full rounded-full shadow-lg'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Ryan Tompson</h5>
              <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                Web Developer
              </p>
              <div className='mt-6'>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-facebook-f'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
          <div className='px-6'>
            <Image
              alt='...'
              src={team2}
              width={800}
              height={800}
              className='mx-auto max-w-full rounded-full shadow-lg'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Romina Hadid</h5>
              <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                Marketing Specialist
              </p>
              <div className='mt-6'>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-facebook-f'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
          <div className='px-6'>
            <Image
              alt='...'
              src={team3}
              width={800}
              height={800}
              className='mx-auto max-w-full rounded-full shadow-lg'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Alexa Smith</h5>
              <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                UI/UX Designer
              </p>
              <div className='mt-6'>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-instagram'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
          <div className='px-6'>
            <Image
              alt='...'
              src={team4}
              width={800}
              height={800}
              className='mx-auto max-w-full rounded-full shadow-lg'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Jenna Kardi</h5>
              <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                Founder and CEO
              </p>
              <div className='mt-6'>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='mr-1 mb-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none'
                  type='button'
                >
                  <i className='fab fa-instagram'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
