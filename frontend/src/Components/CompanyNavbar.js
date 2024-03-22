import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const CompanyNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = ()=> {
    const token = localStorage.getItem('access_token');
     // logout for the user
     axios.get('https://event-ticketing-backend.onrender.com/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        alert('Logged out successfully');
        localStorage.removeItem('access_token');
        navigate('/companylogin'); // Redirect to the login page after logout
      })
      .catch((error) => {
        alert("failed to logout")
      })

  }

  return (
    <nav className="bg-white text-gray-800 p-4 flex justify-between items-center">
      {/* Buttons aligned to the right */}
      <div className="ml-auto">
        <Link to="/createevent" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Create Event
        </Link>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default CompanyNavbar;
