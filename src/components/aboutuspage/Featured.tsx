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
            className='mx-10 mb-12 w-full rounded-lg border-[1px] bg-white px-4 py-10 shadow-lg md:w-6/12 lg:mb-0 lg:w-1/3'
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

const Featured = () => (
  <section className='bg-blue-gray-100 py-8 md:py-12 lg:py-20'>
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-center text-5xl font-semibold not-italic text-teal-1000 sm:text-4xl md:text-5xl lg:text-6xl'>
        Meet Our Team
      </h2>
    </div>
    <div className='container mx-auto px-6'>
      <div className='my-[100px] flex'>
        <TeamCard />
      </div>
    </div>
  </section>
);

export default Featured;
