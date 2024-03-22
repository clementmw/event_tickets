import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {
  const [company_name, setCompanyName] = useState('');
  const [company_email, setCompanyEmail] = useState('');
  const [company_contact, setCompanyContact] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://event-ticketing-backend.onrender.com/auth/signup',{company_name,company_email,company_contact,password})
    .then(res => {
      console.log(res)
      alert('registered in succesfully')

      navigate('/companylogin')
    })
    .catch ((error)=>{
      alert('company cannot be registered')
      console.log(error)
    })


    
  };

  return (
    
    <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
      <h2 className="text-2xl font-bold mb-4 text-center">Company SignUp</h2>
      <form onSubmit={handleSubmit} className="p-4 mt-2">
        <label className="block mb-2">
          Company Name:
          <input
            type="text"
            className="form input border rounded-md w-full py-2 px-3"
            value={company_name}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Company Email:
          <input
            type="email"
            className="form input border rounded-md w-full py-2 px-3"
            value={company_email}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Company Contact:
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3"
            value={company_contact}
            onChange={(e) => setCompanyContact(e.target.value)}
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
  );
}

export default SignUpForm;