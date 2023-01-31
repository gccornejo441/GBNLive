export function HeroScribble() {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 418 42'
      className='absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-1100'
      preserveAspectRatio='none'
    >
      <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
    </svg>
  );
}

/// Page Sections
const Hero = () => (
  <div
    className='relative flex content-center items-center justify-center pt-16 pb-32'
    style={{
      minHeight: '75vh',
    }}
  >
    <div
      className='absolute top-0 h-full w-full bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
      }}
    >
      <span
        id='blackOverlay'
        className='absolute h-full w-full bg-black opacity-75'
      ></span>
    </div>
    <div className='text-center'>
      <h1 className='font-display relative mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-7xl'>
        Effective{' '}
        <span className='relative whitespace-nowrap text-teal-1000'>
          <HeroScribble />
          <span className='relative'>Marketing Strategy</span>
        </span>{' '}
        for Business Success
      </h1>
      <div className='relative mt-10 flex justify-center gap-x-6'>
        <a
          className='group inline-flex items-center justify-center rounded-full bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-teal-1000 hover:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-800 active:text-slate-300'
          href='/register'
        >
          Learn More
        </a>
        <a
          className='text-black-700 group inline-flex items-center justify-center rounded-full bg-yellow-1000 py-2 px-4 text-sm ring-1 ring-yellow-1000 hover:text-black hover:ring-black focus:outline-none focus-visible:outline-blue-600 focus-visible:ring-slate-300 active:bg-slate-100 active:text-slate-600'
          href='#'
        >
          Contact Us
        </a>
      </div>
    </div>
    <div
      className='pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden'
      style={{ height: '70px' }}
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
          className='fill-current text-teal-1000'
          points='2560 0 2560 100 0 100'
        ></polygon>
      </svg>
    </div>
  </div>
);

export default Hero;
