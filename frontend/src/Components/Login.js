import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://event-ticketing-backend.onrender.com/auth/register',{username,password})

      .then(res => {
        console.log(res);
        alert('Logged in successfully');

        // Store the access JWT token in local storage
        localStorage.setItem('access_token', res.data.Token.access);

        // Navigate to the user dashboard
        navigate('/userdashboard');
      })
      .catch(error => {
        console.error('Login failed:', error);
        
      });
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar component here */}
      <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
        <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>
        <form onSubmit={handleSubmit} className="p-4 mt-2">
          <label className="block mb-2">
            User Name:
            <input
              type="text"
              className="form-input border rounded-md w-full py-2 px-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              className="form-input border rounded-md w-full py-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Login
          </button>
          <div className="mt-4">
            <p>Don't have an account? <Link to="/signup" className="text-blue-500">Register</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;