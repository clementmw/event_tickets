// TicketPopup.js
import React, { useState } from 'react';


const TicketPopup = ({ eventName, ticketType, numTickets, totalAmount, onClose, onConfirmSuccess, onConfirmFailure }) => {
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handleConfirm = () => {
    // Prepare the request body
    const requestBody = new URLSearchParams();
    requestBody.append('amount', totalAmount.toString()); // Convert totalAmount to string
    requestBody.append('msisdn', mpesaNumber);
    requestBody.append('account_no', 'Your account number or identifier');

    // Send the request to initiate the payment
    const apiKey = 'Yv94ZI4z93w';

    fetch('https://tinypesa.com/api/v1/express/initialize', {
      method: 'POST',
      headers: {
        Apikey: apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody.toString(),
    })
    .then(response => response.json())
    .then(data => {
      // Check the response for success or failure
      if (data.success) {
        // Payment initiated successfully, you can close the popup and show a success message
        onConfirmSuccess(); 
      } else {
        // Payment failed, you can show an error message
        onConfirmFailure(); 
      }
    })
    .catch(error => {
      console.error('Error initiating payment:', error);
      // Handle any errors that occur during the request
      onConfirmFailure(); 
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md h-4/5 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
        <p className="mb-2">You are about to purchase {numTickets} {ticketType} ticket(s) for {eventName} at a total cost of Ksh{totalAmount}.</p>
        <p className="mb-4">Please confirm your purchase.</p>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          placeholder="Enter your M-Pesa number"
          value={mpesaNumber}
          onChange={(e) => setMpesaNumber(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleConfirm}>Confirm</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TicketPopup;