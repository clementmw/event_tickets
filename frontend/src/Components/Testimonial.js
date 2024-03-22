import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory
import John_Morgan from '../images/John_Morgan.jpg';
import Ellie_Anderson from '../images/Ellie_Anderson.jpg';
import Nia_Adebayo from '../images/Nia_Adebayo.jpg';
import Rigo_Louie from '../images/Rigo_Louie.jpg';
import Mia_Williams from '../images/Mia_Williams.jpg';
import Footer from './Footer';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const data = [
    {
      name: 'James Kin',
      img: John_Morgan,
      review: 'I recently used EventTicketing to book tickets for a concert, and I was blown away by the seamless experience. From browsing events to purchasing tickets, everything was smooth and hassle-free. Highly recommend.',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: 'Ellie Mike',
      img: Ellie_Anderson,
      review: 'EventTicketing made it incredibly easy for me to discover new events in my area. I found tickets for a comedy show last minute, and the whole process was so convenient. Will definitely use again!.',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: 'Maurine Wam',
      img: Nia_Adebayo,
      review: 'Ive been using EventTicketing for all my event needs, and it never disappoints. Whether its concerts, sports games, or theater shows, I always find great deals and have a blast. Thanks, EventTicketing.',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: 'Rigo luis',
      img: Rigo_Louie,
      review: 'As an event organizer, I rely on EventTicketing to sell tickets for my events. The platforms user-friendly interface and robust features make ticket management a breeze. Plus, their customer support is top-notch!.',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    },
    {
      name: 'Diko Milliams',
      img: Mia_Williams,
      review: 'EventTicketing helped me plan the perfect date night with my partner. We found tickets to a romantic dinner cruise, and it was a magical experience. Thanks to EventTicketing for helping us create lasting memories!.',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    },
  ];

  return (

    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className='w-full h-full flex flex-col justify-between'>
        <div className="mt-28 mb-10 mx-auto w-4/5">
          <Slider {...settings} className="testimonial-slider">
            {data.map((d) => (
              <div key={d.name} className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center border-2 border-blue-400">
                    <img src={d.img} alt="" className="w-24 h-24 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <p className="font-bold text-lg mb-2">{d.name}</p>
                    <p className="text-center text-gray-900">{d.review}</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={d.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-500 hover:text-blue-700" /></a>
                  <a href={d.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-500 hover:text-pink-700" /></a>
                  <a href={d.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-700 hover:text-blue-900" /></a>
                  <a href={d.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400 hover:text-blue-600" /></a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Testimonial;
