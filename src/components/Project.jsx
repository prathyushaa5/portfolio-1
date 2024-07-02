import React from 'react'
import {FaGithub} from 'react-icons/fa6'
const Project = () => {
  return (
    <>
    <div className="flex flex-col mt-40">
    <div className="container mx-auto mt-4 px-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 text-black"> BLOOD MANAGMENT SYSTEM using tkinter</h2>
        <p className="text-gray-700">I developed a comprehensive Blood Management System using Python's Tkinter library to streamline the management of blood donations and inventory. The system allows users to register donors, meticulously track blood types, and diligently monitor stock levels. Its intuitive and user-friendly interface ensures seamless record-keepings. This project vividly showcases my skills in GUI development and meticulous database integration.</p>
        <a href="https://github.com/prathyushaa5/BloodManagmentSystem"><FaGithub className="text-black w-8 mt-4"/></a>
      </div>
    </div>
    <div className="container mx-auto mt-4 px-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 text-black">ART GALLERY SYSTEM using HTML,CSS and JS
</h2>
        <p className="text-gray-700">Developed an Art Gallery System using HTML, CSS, JavaScript, and PHP. The system allows users to browse, search, and view art pieces, with a secure login for artists to upload and manage their artworks. It features a responsive design for seamless viewing on any device, dynamic image galleries, and an intuitive interface to enhance user experience. This project showcases my skills in front-end , database management, and user authentication.</p>
        <a href="https://github.com/prathyushaa5/artgallery"><FaGithub className="text-black w-8 mt-4"/></a>
      </div>
    </div>
    <div className="container mx-auto mt-4 px-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 text-black">WEATHER APP using React and open-meteo API</h2>
        <p className="text-gray-700">I developed a dynamic Weather App using React and the Open-Meteo API. The app offers real-time weather data, including temperature, timings, and wind speed for multiple countries. It showcases my proficiency in React and API integration with an intuitive interface, responsive design, and accurate weather updates. This project demonstrates my ability to create functional, user-friendly applications that efficiently retrieve and display essential information..</p>
        <a href="https://github.com/prathyushaa5/Weather-app"><FaGithub className="text-black w-8 mt-4"/></a>
      </div>
    </div>
    </div>
   
        
          
        </>
   
  )
};

export default Project;