import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            // Fetch user's company data
            const response = await axios.get('/events');
            setEvents(response.data);
            console.log(response.data);
            
            } catch(error) {
            console.log(error);
          }
        };
    
        fetchUserData();
      }, []);
  return (
    <>
    </>
    // <div>{events}</div>
  )
}

export default Test