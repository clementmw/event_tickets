import React, { useState } from 'react';
import logoImage from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <div onClick={closeMobileMenu}>
      <nav className="bg-white shadow-lg relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img className='h-20' src={logoImage} alt='logo' />
            </Link>
            <div className={`${click ? 'block' : 'hidden'} lg:flex lg:justify-center space-x-6`}>
              <div>
                <Link to="/" className="block text-center text-xl text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" onClick={closeMobileMenu}>
                  Home
                </Link>
              </div>
              <div>
                <Link to="/about" className="block text-center text-xl text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" onClick={closeMobileMenu}>
                  About
                </Link>
              </div>
              <div>
                <Link to="/Events" className="block text-center text-xl text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" onClick={closeMobileMenu}>
                  Events
                </Link>
              </div>
              <div>
                <Link to="/contact" className="block text-center text-xl text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </div>
              <div>
                <Link to="/testimonial" className="block text-center text-xl text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" onClick={closeMobileMenu}>
                  Testimonial
                </Link>
              </div>

              <div className='ml-12'>
                <Link to="/companylogin" className="text-gray-800 ml-20 hover:text-blue-600 transition duration-300 ease-in-out text-xl">
                  Create Event
                </Link>

                <a href="/login" className="ml-6 text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out text-xl">
                  Login
                </a>

              </div>
            </div>
            <div className="flex items-center" style={{ marginLeft: '3cm' }}>
              {/* Any additional elements you want to include */}
            </div>
            <div className="lg:hidden cursor-pointer" onClick={() => setClick(!click)}>
              <svg className="w-6 h-6 text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {click ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
