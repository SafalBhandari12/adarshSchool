import Image from "next/image";

export default function AboutSection() {
  return (
    <section id='about' className='py-12 sm:py-16 lg:py-20 bg-white relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='space-y-4 sm:space-y-6'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900'>
                <span className='block'>&ldquo;Two generations of apparel</span>
                <span className='block italic text-primary font-light'>
                  manufacturing experience, since 2012&rdquo;
                </span>
              </h2>

              <div className='space-y-3 sm:space-y-4 text-black text-base sm:text-lg leading-relaxed max-w-lg'>
                <p>
                  Adarsh Dress is a leading manufacturer and supplier of
                  uniforms for schools, colleges, corporates, industries, and
                  hospitals.
                </p>
                <p>
                  With two generations of apparel manufacturing experience,
                  since 2012, we enjoy impeccable reputation as one of the
                  trusted and reliable companies for delivering value through
                  our products and services to our clients spread over globe.
                </p>
              </div>

              <div className='pt-4 sm:pt-6'>
                <button className='flex items-center space-x-3 text-black hover:text-teal-gray transition-colors group'>
                  <span className='text-base sm:text-lg font-medium tracking-wide uppercase'>
                    More About Us
                  </span>
                  <div className='w-12 sm:w-16 h-px bg-primary group-hover:w-16 sm:group-hover:w-20 transition-all duration-300'></div>
                  <svg
                    className='w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative order-first lg:order-last'>
            <div className='relative bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl'>
              <div className='aspect-[4/3] sm:aspect-[4/5] relative'>
                <Image
                  src='/images/aboutUs.jpeg'
                  alt='About Adarsh Dress - School Uniform Manufacturing'
                  fill
                  className='object-cover'
                />
                {/* Overlay with company info */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6'>
                  <p className='text-white font-medium text-base sm:text-lg'>
                    Professional Quality & Comfort
                  </p>
                  <p className='text-white/80 text-sm mt-1'>
                    Trusted by schools nationwide
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-cream-yellow rounded-full opacity-80'></div>
              <div className='absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-sage-green rounded-full opacity-60'></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className='mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          <div className='text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-cream/50 to-white'>
            <div className='text-3xl sm:text-4xl font-bold text-black mb-2'>
              13+
            </div>
            <div className='text-primary font-medium text-sm sm:text-base'>
              Years Experience
            </div>
          </div>
          <div className='text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-sage-green/10 to-white'>
            <div className='text-3xl sm:text-4xl font-bold text-black mb-2'>
              500+
            </div>
            <div className='text-primary font-medium text-sm sm:text-base'>
              Schools Served
            </div>
          </div>
          <div className='text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-dusty-rose/10 to-white sm:col-span-2 lg:col-span-1'>
            <div className='text-3xl sm:text-4xl font-bold text-black mb-2'>
              50K+
            </div>
            <div className='text-primary font-medium text-sm sm:text-base'>
              Happy Students
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
