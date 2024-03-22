import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'; // Importing the Navbar component

function LoginForm() {
  const [company_name, setCompanyname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://event-ticketing-backend.onrender.com/auth/companylogin',{company_name,password})
    .then(res => {
      console.log(res)
      alert('logged in succesfully')

      navigate('/companyinfo')

         // store the access jwt token in local storage
         localStorage.setItem('access_token', res.data.Token.access)
    })
    .catch ((error)=>{
      console.log(error)
      alert("company cannot login")
    })

  };


  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
        <h2 className="text-2xl font-bold mb-4 text-center">Company Login</h2>
        <form onSubmit={handleSubmit} className="p-4 mt-2">
          <label className="block mb-2">
            Company Name:
            <input
              type="text"
              className="form-input border rounded-md w-full py-2 px-3"
              value={company_name}
              onChange={(e) => setCompanyname(e.target.value)}
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
            <p>Don't have an account? <Link to="/companysignup" className="text-blue-500">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;