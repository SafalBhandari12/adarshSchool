import PillNav from "../components/PillNav";

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Navigation */}
      <section
        id='home'
        className='relative h-screen'
        style={{
          backgroundImage: "url('/images/Alter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Bar */}
        <PillNav
          logo='/next.svg'
          logoAlt='Adarsh School Dress Logo'
          items={[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Products", href: "#products" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref='#home'
          className='custom-nav'
          ease='power2.easeOut'
          baseColor='#ffffff'
          pillColor='#000000'
          hoveredPillTextColor='#000000'
          pillTextColor='#ffffff'
        />

        {/* Hero Content - Bottom Center */}
        <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center px-4'></div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              About Adarsh School Dress
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We are committed to providing high-quality school uniforms that
              meet the highest standards of comfort, durability, and style.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Quality Assurance</h3>
              <p className='text-gray-600'>
                Every uniform is crafted with premium materials and undergoes
                rigorous quality checks.
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Fast Delivery</h3>
              <p className='text-gray-600'>
                Quick and reliable delivery service to ensure your uniforms
                arrive on time.
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Student Comfort</h3>
              <p className='text-gray-600'>
                Designed with student comfort in mind, ensuring they feel
                confident and at ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id='products' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Our Products
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Explore our wide range of school uniforms and accessories designed
              for modern educational institutions.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='h-48 bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Uniform Image</span>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>School Shirts</h3>
                <p className='text-gray-600 mb-4'>
                  Comfortable and durable school shirts in various sizes and
                  colors.
                </p>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors'>
                  View Details
                </button>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='h-48 bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Uniform Image</span>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>School Pants</h3>
                <p className='text-gray-600 mb-4'>
                  High-quality school pants designed for comfort and durability.
                </p>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors'>
                  View Details
                </button>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='h-48 bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Uniform Image</span>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>School Dresses</h3>
                <p className='text-gray-600 mb-4'>
                  Elegant school dresses for girls with modern designs and
                  comfort.
                </p>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Get in touch with us for any inquiries about our school uniforms
              and services.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-semibold mb-6'>Get in Touch</h3>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-blue-600 mr-3'
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
                    className='w-6 h-6 text-blue-600 mr-3'
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
                    className='w-6 h-6 text-blue-600 mr-3'
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
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Adarsh School Dress</h3>
              <p className='text-gray-400'>
                Providing quality school uniforms that inspire confidence and
                comfort in every student.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#home'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#products'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
              <p className='text-gray-400'>123 School Street</p>
              <p className='text-gray-400'>Education City, EC 12345</p>
              <p className='text-gray-400'>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
            <p className='text-gray-400'>
              &copy; 2024 Adarsh School Dress. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
