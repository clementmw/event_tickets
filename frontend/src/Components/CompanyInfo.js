import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CompanyNavbar from './CompanyNavbar';

function CompanyInfo() {
  const [userData, setUserData] = useState({});
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        // Fetch user's company data
        const response = await axios.get('https://event-ticketing-backend.onrender.com/company', config);
        setUserData(response.data);
        console.log(response.data);

        // Fetch company events
        const eventsResponse = await axios.get('https://event-ticketing-backend.onrender.com/companyevents', config);

        const sortedEvents = eventsResponse.data.sort((a, b) => {
          return new Date(b.start_date) - new Date(a.start_date);
        });
        setEvents(sortedEvents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const response = await axios.delete(`https://event-ticketing-backend.onrender.com/delete_event/${eventId}`, config);
      alert('Do you want to delete this event?',response)

      // Update the events state to remove the deleted event
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.log('Error deleting event:', error);
    }
  };  

  const handleTickets = (event_name) => {
    navigate(`/settickets/${event_name}`);
  };


  return (
    <div className="container mx-auto mt-14 mb-14 p-4">
      <div>
      <CompanyNavbar/>
      </div>
   <h1 className="text-2xl font-bold text-gray-800">
  WELCOME BACK: {userData.company_name ? userData.company_name.toUpperCase() : 'User'}
    </h1>

      <div className='mt-7'>
        <p className="text-gray-600">
          <a href="/createevent" className="text-blue-500 hover:underline">
            Create An Event
          </a>
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">YOUR EVENTS:</h2>

      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-8">
            <div className="shadow-md  my-4 mb-7 bg-gray-200 rounded-lg p-4">
              <p className="text-xl font-semibold">EVENT NAME: {event.event_name.toUpperCase()}</p>
              <p className="text-gray-700">ABOUT: {event.description.toUpperCase()}</p>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>START DATE:</strong> {event.start_date}
                </p>
                <p>
                  <strong>END DATE:</strong> {event.end_date}
                </p>
                <p>
                  <strong>Time:</strong> {event.event_time}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>VENUE:</strong> {event.venue_name}
                </p>
                <p>
                  <strong>LOCATION:</strong> {event.location}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-semibold">TICKET QUANTITY:</p>
                <ul>
                  {Object.entries(event.ticket_categories).map(([category, quantity]) => (
                    <li key={category} className="ml-4">
                      {category}: {quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
             <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() => handleTickets(event.event_name)}>
              Set Tickets
              </button>
              </div>
              <div className="mt-4">
             <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDelete(event.id)}>
              Delete Event
              </button>
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyInfo;
