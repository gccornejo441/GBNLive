import React from 'react';

const Blog = () => {
  return (
    <section className='flex justify-center py-[80px] lg:py-[120px]'>
      <div className='container px-[10px] xl:px-[200px]'>
        <div className='grid grid-cols-1 gap-x-[30px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3'>
          <div className='post-item'>
            <a
              href='blog-details.html'
              className='mb-[35px] block overflow-hidden rounded-[6px]'
            >
              {/* <img className="w-full h-full" src="https://template.hasthemes.com/bery/bery/assets/images/blog-post/post1.png" width={370} height={270} loading="lazy" alt="Tip’s about Real Estate Recent Conditions from Agent." /> */}
            </a>
            <div>
              <span className='text-secondary mb-[10px] block text-[14px] font-normal leading-none'>
                James Alber on 22 December, 21
              </span>
              <h3>
                <a
                  href='blog-details.html'
                  className='font-lora text-primary hover:text-secondary mb-[10px] block text-[22px] font-medium leading-[1.285] transition-all xl:text-[24px]'
                >
                  Tip’s about Real Estate Recent Conditions from Agent.
                </a>
              </h3>
              <p className='text-[16px] font-light leading-[1.75] text-[#494949]'>
                Properties are most budget friendly so you have are opportunity
                to find are the best the best...
              </p>
            </div>
          </div>
          <div className='post-item'>
            <a
              href='blog-details.html'
              className='mb-[35px] block overflow-hidden rounded-[6px]'
            >
              {/* <img className="w-full h-full" src="https://template.hasthemes.com/bery/bery/assets/images/blog-post/post1.png" width={370} height={270} loading="lazy" alt="Importance of Build quality of modern Real Estate." /> */}
            </a>
            <div>
              <span className='text-secondary mb-[10px] block text-[14px] font-normal leading-none'>
                Shohel Gyes on 21 December, 22
              </span>
              <h3>
                <a
                  href='blog-details.html'
                  className='font-lora text-primary hover:text-secondary mb-[10px] block text-[22px] font-medium leading-[1.285] transition-all xl:text-[24px]'
                >
                  Importance of Build quality of modern Real Estate.
                </a>
              </h3>
              <p className='text-[16px] font-light leading-[1.75] text-[#494949]'>
                Properties are most budget friendly so you have are opportunity
                to find are the best the best...
              </p>
            </div>
          </div>
          <div className='post-item'>
            <a
              href='blog-details.html'
              className='mb-[35px] block overflow-hidden rounded-[6px]'
            >
              {/* <img className="w-full h-full" src="https://template.hasthemes.com/bery/bery/assets/images/blog-post/post1.png" width={370} height={270} loading="lazy" alt="Most Popular Real Estae area you can choose from." /> */}
            </a>
            <div>
              <span className='text-secondary mb-[10px] block text-[14px] font-normal leading-none'>
                Ethan Patel on 19 December, 21
              </span>
              <h3>
                <a
                  href='blog-details.html'
                  className='font-lora text-primary hover:text-secondary mb-[10px] block text-[22px] font-medium leading-[1.285] transition-all xl:text-[24px]'
                >
                  Most Popular Real Estae area you can choose from.
                </a>
              </h3>
              <p className='text-[16px] font-light leading-[1.75] text-[#494949]'>
                Properties are most budget friendly so you have are opportunity
                to find are the best the best...
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-12 mt-[50px] gap-x-[30px]">
            <div className="col-span-12">
              <ul className="pagination flex flex-wrap items-center justify-center">
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] bg-primary rounded-full text-orange leading-none transition-all hover:bg-secondary text-white text-[12px]" href="#">
                    <svg width={6} height={11} viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(.clip0_876_580)">
                        <path d="M5.8853 10.0592C5.7326 10.212 5.48474 10.212 5.33204 10.0592L0.636322 5.36134C0.48362 5.20856 0.48362 4.96059 0.636322 4.80782L5.33204 0.109909C5.48749 -0.0403413 5.73535 -0.0359829 5.8853 0.119544C6.03181 0.271171 6.03181 0.511801 5.8853 0.663428L1.46633 5.08446L5.8853 9.50573C6.03823 9.65873 6.03823 9.90648 5.8853 10.0592Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath className="clip0_876_580">
                          <rect width="5.47826" height="10.1739" fill="white" transform="matrix(-1 0 0 1 6 0)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] leading-none hover:text-secondary" href="#">1</a>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] leading-none hover:text-secondary" href="#">2</a>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] leading-none hover:text-secondary" href="#">3</a>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] leading-none hover:text-secondary" href="#">4</a>
                </li>
                <li className="mx-2">
                  <span>---</span>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] leading-none hover:text-secondary" href="#">25</a>
                </li>
                <li className="mx-2">
                  <a className="flex flex-wrap items-center justify-center  w-[26px] h-[26px] bg-primary rounded-full text-orange leading-none transition-all hover:bg-secondary text-white text-[12px]" href="#">
                    <svg width={6} height={11} viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(.clip0_876_576)">
                        <path d="M0.114699 10.0592C0.267401 10.212 0.515257 10.212 0.667959 10.0592L5.36368 5.36134C5.51638 5.20856 5.51638 4.96059 5.36368 4.80782L0.667959 0.109909C0.512505 -0.0403413 0.26465 -0.0359829 0.114699 0.119544C-0.031813 0.271171 -0.031813 0.511801 0.114699 0.663428L4.53367 5.08446L0.114699 9.50573C-0.038233 9.65873 -0.038233 9.90648 0.114699 10.0592Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath className="clip0_876_576">
                          <rect width="5.47826" height="10.1739" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Blog;
