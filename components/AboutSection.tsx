import Image from "next/image";

export default function AboutSection() {
  return (
    <section id='about' className='py-20 bg-white relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h2 className='text-5xl lg:text-6xl font-serif leading-tight text-gray-900'>
                <span className='block'>&ldquo;Two generations of apparel</span>
                <span className='block italic text-dusty-rose font-light'>
                  manufacturing experience, since 2012&rdquo;
                </span>
              </h2>

              <div className='space-y-4 text-gray-700 text-lg leading-relaxed max-w-lg'>
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

              <div className='pt-6'>
                <button className='flex items-center space-x-3 text-dusty-rose hover:text-teal-gray transition-colors group'>
                  <span className='text-lg font-medium tracking-wide uppercase'>
                    More About Us
                  </span>
                  <div className='w-16 h-px bg-dusty-rose group-hover:w-20 transition-all duration-300'></div>
                  <svg
                    className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
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
          <div className='relative'>
            <div className='relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl'>
              <div className='aspect-[4/5] relative'>
                <Image
                  src='/images/aboutUs.jpeg'
                  alt='About Adarsh Dress - School Uniform Manufacturing'
                  fill
                  className='object-cover'
                />
                {/* Overlay with company info */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6'>
                  <p className='text-white font-medium text-lg'>
                    Professional Quality & Comfort
                  </p>
                  <p className='text-white/80 text-sm mt-1'>
                    Trusted by schools nationwide
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-6 -right-6 w-24 h-24 bg-cream-yellow rounded-full opacity-80'></div>
              <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-sage-green rounded-full opacity-60'></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className='mt-24 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center p-8  rounded-xl'>
            <div className='text-4xl font-bold text-dusty-rose mb-2'>12+</div>
            <div className='text-gray-700 font-medium'>Years Experience</div>
          </div>
          <div className='text-center p-8 rounded-xl'>
            <div className='text-4xl font-bold text-dusty-rose mb-2'>500+</div>
            <div className='text-gray-700 font-medium'>Schools Served</div>
          </div>
          <div className='text-center p-8 rounded-xl'>
            <div className='text-4xl font-bold text-dusty-rose mb-2'>50K+</div>
            <div className='text-gray-700 font-medium'>Happy Students</div>
          </div>
        </div>
      </div>
    </section>
  );
}
