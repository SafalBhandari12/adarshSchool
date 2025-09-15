"use client";
import Image from "next/image";

export default function BulkOrdersSection() {
  return (
    <section
      id='bulk-orders'
      className='py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream to-sage-green/10 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-6 sm:space-y-8 order-2 lg:order-1'>
            <div className='space-y-4 sm:space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-gray-900'>
                  <span className='block text-primary italic'>Bulk Orders</span>
                  <span className='block'>Made Simple</span>
                </h2>
                <div className='w-20 sm:w-24 h-1 bg-primary rounded-full'></div>
              </div>

              <div className='space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed'>
                <p className='text-xl sm:text-2xl font-semibold text-primary'>
                  From 50 to 5000+ uniforms - we&apos;ve got you covered.
                </p>

                <div className='space-y-3 sm:space-y-4'>
                  <p>
                    Whether you&apos;re a small school or a large educational
                    institution, we specialize in delivering high-quality school
                    uniforms in bulk quantities with competitive pricing and
                    reliable timelines.
                  </p>

                  <p>
                    Our streamlined production process ensures consistent
                    quality across large orders while maintaining
                    cost-effectiveness for educational institutions of all
                    sizes.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className='grid sm:grid-cols-2 gap-3 sm:gap-4 pt-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Volume Discounts
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Better pricing for larger quantities
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Fast Delivery
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Reliable timelines you can count on
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Quality Assured
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Consistent quality across all items
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Easy Process
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Simple ordering and tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='pt-6'>
                <button className='group inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dusty-rose/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                  Get Bulk Pricing Quote
                  <div className='ml-3 w-6 h-6 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300'>
                    <svg
                      className='w-3 h-3'
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
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative order-1 lg:order-2'>
            <div className='relative z-10'>
              <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
                <Image
                  src='/images/new.png'
                  alt='Bulk school uniform orders - large quantity uniforms ready for delivery'
                  width={600}
                  height={500}
                  className='w-full h-auto object-cover'
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-dusty-rose/20 rounded-full blur-xl'></div>
              <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-sage-green/20 rounded-full blur-xl'></div>

              {/* Floating Badge */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-black font-playfair'>
              5000+
            </div>
            <div className='text-primary mt-2'>Uniforms Delivered</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-black font-playfair'>
              50+
            </div>
            <div className='text-primary mt-2'>Schools Served</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-black font-playfair'>
              24hrs
            </div>
            <div className='text-primary mt-2'>Quick Response</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-black font-playfair'>
              99%
            </div>
            <div className='text-primary mt-2'>Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-32 h-32 border border-dusty-rose rounded-full'></div>
        <div className='absolute bottom-32 right-16 w-24 h-24 border border-sage-green rounded-full'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 border border-dusty-rose/50 rounded-full'></div>
      </div>
    </section>
  );
}
