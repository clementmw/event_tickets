import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'; // Importing Navbar component

function Signup() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://event-ticketing-backend.onrender.com/auth/register',{username,email,contact,password})
    .then(res => {
      console.log(res)
      alert('registered in succesfully')

      navigate('/login')
    })
    .catch((err)=>{
      console.log(err)
      alert("user cannot register")
    })
       

  };

  return (
    <div>
      <Navbar /> {/* Including Navbar component */}
      <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
        <h2 className="text-2xl font-bold mb-4 text-center">User Sign Up</h2>
        <form onSubmit={handleSubmit} className="p-4 mt-2">
          <label className="block mb-2">
            User Name:
            <input
              type="text"
              className="form input border rounded-md w-full py-2 px-3"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              className="form input border rounded-md w-full py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Contact:
            <input
              type="number"
              className="form-input border rounded-md w-full py-2 px-3"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;