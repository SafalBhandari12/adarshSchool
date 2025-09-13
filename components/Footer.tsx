export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 relative'>
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
  );
}
