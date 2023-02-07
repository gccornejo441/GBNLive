import Image from 'next/image';

import team1 from '~/images/gabe-cornejo-headshot.png';
import team4 from '~/images/Megan-Litner-headshot.jpg';
import team2 from '~/images/Nick-Preston-headshot.jpg';
import team3 from '~/images/team-1-800x800.jpg';

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
    photo: team4,
  },
];

function TeamCard() {
  return (
    <>
      {cardWrite.map((item) => {
        return (
          <div
            key={item.id}
            className='rounded-lg border-[1px] bg-white py-10 drop-shadow-lg transition duration-150 ease-out hover:shadow-lg hover:shadow-teal-1000 hover:ease-in xl:max-w-[300px]'
          >
            <div className='px-2 py-2'>
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
  <section className='my-10 md:pt-20 md:pb-48'>
    <div className='container mx-auto px-4'>
      <div className='mb-12 flex flex-wrap justify-center text-center'>
        <div className='w-full px-4 lg:w-6/12'>
          <h2 className='text-4xl font-semibold text-teal-1000'>
            Here are our heroes
          </h2>
        </div>
      </div>
      <div className='mx-auto grid w-[300px] gap-5 lg:w-[600px] lg:grid-cols-2 xl:w-full xl:grid-cols-4 xl:gap-0'>
        <TeamCard />
      </div>
    </div>
  </section>
);

export default Team;
