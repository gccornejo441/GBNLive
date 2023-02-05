import Image from 'next/image';

import team1 from '~/images/team-1-800x800.jpg';
import team2 from '~/images/team-2-800x800.jpg';
import team3 from '~/images/team-3-800x800.jpg';

const cardWrite = [
  {
    id: 0,
    name: 'Gabe',
    title: 'Tech Creative',
    photo: team1,
  },

  {
    id: 1,
    name: 'Brian',
    title: 'Video Creative',
    photo: team3,
  },
  {
    id: 2,
    name: 'Nick',
    title: 'Design Creative',
    photo: team2,
  },
  {
    id: 3,
    name: 'Megan',
    title: 'Art Creative',
    photo: team3,
  },
];

function TeamCard() {
  return (
    <>
      {cardWrite.map((item) => {
        return (
          <div
            key={item.id}
            className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-1/3'
          >
            <div className='px-6'>
              <Image
                alt='...'
                src={item.photo}
                width={800}
                height={800}
                className='mx-auto max-w-full rounded-full shadow-lg'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>{item.name}</h5>
                <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                  {item.title}
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
        );
      })}
    </>
  );
}

const Team = () => (
  <section className='md:pt-20 md:pb-48'>
    <div className='container mx-auto px-4'>
      <div className='mb-12 flex flex-wrap justify-center text-center'>
        <div className='w-full px-4 lg:w-6/12'>
          <h2 className='text-4xl font-semibold text-teal-1000'>
            Here are our heroes
          </h2>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <TeamCard />
      </div>
    </div>
  </section>
);

export default Team;
