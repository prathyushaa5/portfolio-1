import React from 'react';
import '../App.css';
import photo from "../assets/prathyusha.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import AboutMeTabs from './AboutMeTabs';
const Home = () => {
  const handleDownload = () => {
    // Replace with the path to your CV file
    const cvUrl = "../assets/resume.pdf"
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'resume.pdf'; // Optional: Set the default filename for the download
    link.target = '_blank'; // Optional: Open in a new tab
    
    // Trigger the download
    link.click();
  };
  return (
    <div className="mt-20 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src={photo}
              alt="Your Photo"
              className="rounded-full 2xl:w-64 2xl:h-64 h-48 w-48 md:h-64 md:w-64 mx-auto md:mx-0 md:rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl text-white sm:text-center md:text-3xl  xl:text-5xl 2xl:text-5xl lg:sm:text-3xl  font-bold mb-4">Prathyusha</h1>
            <p className="text-base mt-10">I am Prathyusha, a 20-year-old engineering student from Surathkal, Mangalore. Currently, I am in my third year of studying Computer Science at St. Joseph Engineering College, Mangalore. Passionate about technology and problem-solving, I am eager to continue expanding my knowledge and skills in the field of computer science.</p>
          
            <div className="flex space-x-6 mt-4">
      <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
    <button onClick={handleDownload} className="mt-4 mb-4 border-2  sm:w-1/4 border-white-500 p-2 rounded-md text-white-500 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
       
          {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3m0 13.5L7.5 12M16 6v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 012-2zm0 0a2 2 0 002-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2m0 0a2 2 0 00-2-2V6a2 2 0 012-2h2a2 2 0 012 2v9.5m0 0L16.5 12"></path> */}
       
        Download CV
      </button>
         
          </div>
        </div>
      </div>
      <div className="mt-100" >
     <AboutMeTabs/>
     </div>
      </div>

     
    
    </div>
  
  );
};

export default Home;