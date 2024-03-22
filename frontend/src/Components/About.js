import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory

import AboutUsImage from '../images/about.jpg'; // Header image
import AboutVideo from '../images/secondary.mp4'; // Video
import SecondaryImage2 from '../images/Team.jpg'; // Second secondary image

const About = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <img src={AboutUsImage} alt="About Us" className="w-full object-cover rounded-lg mb-8" />
          
          <div className="flex flex-wrap -mx-4 items-start">
            <div className="w-full lg:w-1/2 px-4">
              {/* <h2 className="text-3xl font-bold mb-6">About Us</h2> */}
              <p className="mb-4">
                Event Tickets revolutionizes event ticketing with a user-centric platform for easy access to memorable live experiences. We bridge event enthusiasts and organizers, celebrating community and unforgettable moments in just a few clicks.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                Our mission is to provide a seamless and enjoyable experience for event-goers to find, book, and attend their favorite events, while also empowering event organizers to reach their audience effectively.
              </p>
              <img src={SecondaryImage2} alt="Secondary 2" className="w-full object-cover rounded-lg mb-4" />
            </div>

            <div className="w-full h-96 lg:w-1/2 px-4"> {/* Reduced height here (h-64) */}
              <video autoPlay loop muted className="h-full w-full object-cover rounded-lg mb-4">
                <source src={AboutVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-2xl font-bold mb-4 mt-20">Meet our Team</h3>
              <p>
                Event Ticketing team is dedicated to delivering exceptional service and experiences to our users. From our founders to our technical experts and marketing professionals, meet the passionate individuals behind our platform.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size="2em" />
            </a>
            <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size="2em" />
            </a>
            <a href="https://www.linkedin.com" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size="2em" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;