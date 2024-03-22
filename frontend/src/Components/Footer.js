import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-white text-gray-800 py-8">
      {/* Grey line separator */}
      <hr className="border-t-2 border-gray-300 mb-4" />
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Flex container for horizontal alignment */}
        <div className="flex flex-wrap justify-between w-full mb-4">
          {/* Navigation heading */}
          <div className="footer-item mb-4">
            <h3 className="text-lg font-bold mb-4">Navigate</h3>
            <ul className="text-gray-800">
              <li className="cursor-pointer" onClick={() => handleNavigation('/')}>Home</li>
              <li className="cursor-pointer" onClick={() => handleNavigation('/events')}>Events</li>
              <li className="cursor-pointer" onClick={() => handleNavigation('/testimonial')}>Testimonials</li>
              <li className="cursor-pointer" onClick={() => handleNavigation('/about')}>About</li>
            </ul>
          </div>

          {/* Contact Us section */}
          <div className="footer-item mb-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col text-gray-800">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-xl" />
                <p className="cursor-pointer" onClick={() => handleNavigation('/contact')}>123 Street, City, Country</p>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-xl" />
                <p className="cursor-pointer" onClick={() => handleNavigation('/contact')}>+1234567890</p>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-xl" />
                <p className="cursor-pointer" onClick={() => handleNavigation('/contact')}>+1234567890</p>
              </div>
            </div>
          </div>

          {/* Follow Us section */}
          <div className="footer-item mb-4">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="social-icons">
              <FaFacebook className="text-xl mr-4 mb-4 cursor-pointer hover:text-blue-500" onClick={() => window.open('https://facebook.com')} />
              <FaTwitter className="text-xl mr-4 mb-4 cursor-pointer hover:text-blue-500" onClick={() => window.open('https://twitter.com')} />
              <FaInstagram className="text-xl cursor-pointer hover:text-blue-500" onClick={() => window.open('https://instagram.com')} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto text-sm text-center flex items-center">
          <p className="flex-grow">&copy; 2024 Event Ticketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
