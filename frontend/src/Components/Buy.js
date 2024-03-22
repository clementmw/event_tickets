import React from 'react';
import UsersNavbar from './UsersNavbar'; // Import the UsersNavbar component

const Buy = () => {
  return (
    <>
      <UsersNavbar /> {/* Render the UsersNavbar component */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">How to Buy a Ticket</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg mb-4">Follow these steps to buy a ticket:</p>
          <ol className="list-decimal pl-6">
            <li className="mb-2">Select the event you want to attend from the list of upcoming events.</li>
            <li className="mb-2">Choose the type of ticket (e.g., VIP, General Admission) and the number of tickets you need.</li>
            <li className="mb-2">Click on the "Buy Tickets" button to proceed to the checkout page.</li>
            <li className="mb-2">Review your order details and fill in your contact information.</li>
            <li className="mb-2">Select your preferred payment method and complete the transaction.</li>
            <li className="mb-2">After successful payment, you will receive a confirmation email with your ticket details.</li>
          </ol>
          <p className="mt-4">If you encounter any issues or have questions about the ticket purchase process, please contact our support team.</p>
        </div>
      </div>
    </>
  );
};

export default Buy;
