import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import videoBackground from '../images/background-video.mp4'; 

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}

      <div className='absolute top-0 left-0 z-0 w-full h-screen overflow-hidden '>
        <video className='w-full h-full object-cover object-bottom mx-auto' autoPlay loop muted>
          <source src={videoBackground} type='video/mp4' />
        </video>
      </div>

      <div className='relative z-10 text-center mt-36'>
        <p className='text-white text-5xl font-extrabold '>
          Unlock unforgettable experiences<br/>with just a ticket<br/>Your gateway to excitement<br/>awaits!
        </p>
      </div>
    </div>
  );
};

export default Home;

