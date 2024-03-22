import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function Ticketspage() {
  const { event_name } = useParams(); // Extract eventId from URL parameter
  const [ticket_type, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTickets = (e)=>{
    e.preventDefault();
    const accessToken = localStorage.getItem('access_token');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

     axios.post("https://event-ticketing-backend.onrender.com/tickets",{event_name:event_name, ticket_type,price,quantity},config)
    .then ((res)=>{
      console.log(res)
      alert('ticket created successfully')

      // Reset ticket purchase fields
      setTicketType('');
      setPrice('');
      setQuantity('');
    })
    .catch((err)=>{
      console.log(err)
      alert("ticket cannot be created")
    })
  }


  return (
    <div className="container mx-auto mt-14 mb-14 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Set Tickets for {event_name}</h1>
     <form onSubmit={handleTickets} className="max-w-md mx-auto">
     <h1 className="text-3xl font-bold text-gray-800 mb-6">Set Tickets for {event_name}</h1>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Ticket Type</label> 
           <select
            value={ticket_type}
            onChange={e => setTicketType(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Ticket Type</option>
            <option value="vvip">VVIP</option>
            <option value="vip">VIP</option>
            <option value="regular">Regular</option>
          </select>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>          <input
            type='number'
            placeholder='Quantity'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>          <input
            type='number'
            placeholder='Enter ticket price'
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-center"> 
        <button type='submit' className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-96">Create Ticket</button>
        </div>
      </form>
    </div>
  );
}

export default Ticketspage;
