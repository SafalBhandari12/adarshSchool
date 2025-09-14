"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id='contact'
      className='py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-cream via-white to-sage-green/5 relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-32 sm:w-40 h-32 sm:h-40 border border-dusty-rose rounded-full'></div>
        <div className='absolute bottom-32 right-16 w-24 sm:w-32 h-24 sm:h-32 border border-sage-green rounded-full'></div>
        <div className='absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 border border-dusty-rose/50 rounded-full'></div>
        <div className='absolute top-1/4 right-1/3 w-16 sm:w-20 h-16 sm:h-20 border border-sage-green/50 rounded-full'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <div className='space-y-4 sm:space-y-6'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-gray-900'>
              <span className='block text-dusty-rose italic'>
                Let&apos;s Connect
              </span>
              <span className='block'>& Create Together</span>
            </h2>
            <div className='w-20 sm:w-24 h-1 bg-dusty-rose rounded-full mx-auto'></div>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4'>
              Ready to outfit your school with premium uniforms? We&apos;re here
              to help with custom solutions, bulk orders, and exceptional
              service.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start'>
          {/* Contact Information - Left Side */}
          <div className='lg:col-span-2 space-y-8 sm:space-y-12 order-2 lg:order-1'>
            <div className='space-y-6 sm:space-y-8'>
              <div className='space-y-4 sm:space-y-6'>
                <h3 className='text-xl sm:text-2xl font-playfair font-semibold text-gray-900'>
                  Get in Touch
                </h3>
                <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                  Whether you need a single uniform or outfitting an entire
                  school, our team is ready to provide personalized assistance.
                </p>
              </div>

              {/* Contact Details */}
              <div className='space-y-4 sm:space-y-6'>
                <div className='group flex items-start space-x-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-green/10'>
                  <div className='flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center group-hover:bg-dusty-rose/20 transition-colors'>
                    <svg
                      className='w-5 sm:w-6 h-5 sm:h-6 text-dusty-rose'
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
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Visit Our Store
                    </h4>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      123 Fashion District, School Uniform Plaza
                      <br />
                      Education City, EC 12345
                    </p>
                  </div>
                </div>

                <div className='group flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-green/10'>
                  <div className='flex-shrink-0 w-12 h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center group-hover:bg-dusty-rose/20 transition-colors'>
                    <svg
                      className='w-6 h-6 text-dusty-rose'
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
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Call Us
                    </h4>
                    <p className='text-gray-600 text-sm'>+1 (555) 123-4567</p>
                    <p className='text-gray-500 text-xs mt-1'>
                      Mon-Fri 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className='group flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-green/10'>
                  <div className='flex-shrink-0 w-12 h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center group-hover:bg-dusty-rose/20 transition-colors'>
                    <svg
                      className='w-6 h-6 text-dusty-rose'
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
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Email Us
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      info@adarshschooldress.com
                    </p>
                    <p className='text-gray-500 text-xs mt-1'>
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className='p-8 rounded-3xl bg-gradient-to-br from-dusty-rose/5 to-sage-green/5 border border-dusty-rose/10'>
              <h4 className='font-playfair font-semibold text-lg text-gray-900 mb-4'>
                Business Hours
              </h4>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Monday - Friday</span>
                  <span className='text-gray-900 font-medium'>
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Saturday</span>
                  <span className='text-gray-900 font-medium'>
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Sunday</span>
                  <span className='text-gray-900 font-medium'>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className='lg:col-span-3 order-1 lg:order-2'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-sage-green/10 p-6 sm:p-8 lg:p-12'>
              <div className='mb-6 sm:mb-8'>
                <h3 className='text-2xl sm:text-3xl font-playfair font-semibold text-gray-900 mb-2'>
                  Send Us a Message
                </h3>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-semibold text-gray-700'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-sage-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 focus:border-dusty-rose transition-all duration-300 bg-white/80 text-sm sm:text-base'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-semibold text-gray-700'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-sage-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 focus:border-dusty-rose transition-all duration-300 bg-white/80 text-sm sm:text-base'
                      placeholder='Enter your email address'
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-semibold text-gray-700'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-sage-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 focus:border-dusty-rose transition-all duration-300 bg-white/80'
                      placeholder='Enter your phone number'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-semibold text-gray-700'
                    >
                      Subject *
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-sage-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 focus:border-dusty-rose transition-all duration-300 bg-white/80'
                    >
                      <option value=''>Select a subject</option>
                      <option value='bulk-order'>Bulk Order Inquiry</option>
                      <option value='custom-design'>
                        Custom Design Request
                      </option>
                      <option value='pricing'>Pricing Information</option>
                      <option value='general'>General Inquiry</option>
                      <option value='support'>Customer Support</option>
                    </select>
                  </div>
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-gray-700'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-sage-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 focus:border-dusty-rose transition-all duration-300 bg-white/80 resize-none'
                    placeholder='Tell us about your requirements, quantity needed, timeline, or any specific questions you have...'
                  ></textarea>
                </div>

                <div className='pt-4'>
                  <button
                    type='submit'
                    className='group w-full bg-dusty-rose text-white font-semibold py-4 px-8 rounded-xl hover:bg-dusty-rose/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-dusty-rose/50'
                  >
                    <span className='flex items-center justify-center space-x-3'>
                      <span>Send Message</span>
                      <svg
                        className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <p className='text-sm text-gray-500 text-center'>
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className='mt-12 sm:mt-16 lg:mt-20 text-center'>
          <div className='inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 bg-white/90 backdrop-blur-sm rounded-full py-3 sm:py-4 px-6 sm:px-8 shadow-lg border border-sage-green/10 max-w-sm sm:max-w-none mx-auto'>
            <span className='text-gray-600 text-sm sm:text-base text-center'>
              Need immediate assistance?
            </span>
            <a
              href='tel:+15551234567'
              className='bg-dusty-rose text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-dusty-rose/90 transition-colors text-sm sm:text-base whitespace-nowrap'
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
