import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const UsersNavbar = () => {
  return (
    <nav className="bg-white py-4"> 
      <ul className="flex justify-center px-8">
        <li className="mx-6">
          <Link to="/upcoming-events" className="text-black hover:text-blue-600">Upcoming Events</Link>
        </li>
        <li className="mx-6"> 
          <Link to="/how-to-buy-ticket" className="text-black hover:text-gray-300">How to Buy Ticket</Link>
        </li>
        <li className="mx-6"> 
          <Link to="/support" className="text-black hover:text-gray-300">Support</Link>
        </li>
        {/* <li className="mx-6"> 
          <Link to="/my-tickets" className="text-black hover:text-gray-300">My Tickets</Link>
        </li>
        <li className="mx-6"> 
          <Link to="/my-events" className="text-black hover:text-gray-300">My Events</Link>
        </li> */}
        <li className="mx-6"> {/* Added for the Logout link */}
          <Link to="/logout" className="text-black hover:text-gray-300">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UsersNavbar;
