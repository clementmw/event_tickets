import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div>
          <img className="h-8" src="logo.png" alt="Logo" />
        </div>

      
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/about" className="hover:text-blue-300">About</a>
          <a href="/events" className="hover:text-blue-300">Events</a>
          <a href="/contact" className="hover:text-blue-300">Contact</a>
          <a href="/testimonial" className="hover:text-blue-300">Testimonial</a>
        </nav>

        
        <div className="flex items-center space-x-4">
          <a href="/companylogin" className="hover:text-blue-300">Create Event</a>
          <a href="/login" className="hover:text-blue-300">Login</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
