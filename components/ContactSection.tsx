"use client";

export default function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-gray-50 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16 bg-black text-white p-8 rounded-lg'>
          <h2 className='text-4xl font-bold mb-4'>Contact Us</h2>
          <p className='text-xl max-w-3xl mx-auto'>
            Get in touch with us for any inquiries about our school uniforms and
            services.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6'>Get in Touch</h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-dusty-rose mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-gray-700'>
                  123 School Street, Education City, EC 12345
                </span>
              </div>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-dusty-rose mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span className='text-gray-700'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-dusty-rose mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-gray-700'>
                  info@adarshschooldress.com
                </span>
              </div>
            </div>
          </div>
          <div>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dusty-rose'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dusty-rose'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dusty-rose'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-dusty-rose hover:bg-teal-gray text-white font-bold py-3 px-4 rounded-md transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
