import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';

function Contact() {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(null);

    const handleSubmit = async (e) => { 
        e.preventDefault();

        axios.post('https://event-ticketing-backend.onrender.com/contact', {full_name, email, message})
        .then(res => {
            setSubmit('success');
        })
        .catch(error => {
            setSubmit('error');
        });

        // Reset the form fields
        setFullName('');   
        setEmail('');
        setMessage('');
    };
    
    return (
        <>
            <Navbar /> {/* Include the Navbar component here */}
            <div 
             className="max-w-md mx-auto mt-28 p-10 bg-white rounded-lg shadow-md p-4 border"
             style={{ marginBottom: '4rem' }} // Add margin-bottom for space between contact form and footer
            >
                <form onSubmit={handleSubmit}>
                    {submit === 'success' && (
                        <div className='text-green-600 mb-4'>Thanks, your message has been received.</div>
                    )}

                    {submit === 'error' && (
                        <div className='text-red-600 mb-4'>Please confirm your message.</div>
                    )}
                    <h1 className='text-3xl text-center font-bold mb-4 black'>Contact Us</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
                            Full Name
                        </label>
                        <input
                            className="border rounded-md w-full py-2 px-3"
                            type='text'
                            id='full_name'
                            value={full_name}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Enter your full name'
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="border rounded-md w-full py-2 px-3"
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="border rounded-md w-full py-2 px-3 h-32"
                            type='text'
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Enter your message'
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer /> {/* Footer component */}
        </>
    );
}

export default Contact;
