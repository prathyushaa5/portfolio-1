import React from 'react'
import {FaGithub} from 'react-icons/fa6'
const Project = () => {
  return (
    <div>
    <div className="flex flex-col sm:text-base  mt-40">
    <div className="container mx-auto  border-gray-400 border-2 rounded  mx-auto mt-4 px-4">
      <div className="bg-black text-white  rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 "> BLOOD MANAGMENT SYSTEM using tkinter</h2>
        <p className="text-white md:text-base text-sm">I developed a comprehensive Blood Management System using Python's Tkinter library to streamline the management of blood donations and inventory. The system allows users to register donors, meticulously track blood types, and diligently monitor stock levels. Its intuitive and user-friendly interface ensures seamless record-keepings.</p>
        <a href="https://github.com/prathyushaa5/BloodManagmentSystem"><FaGithub className="text-white w-8 mt-4"/></a>
      </div>
    </div>
    <div className="container text-white border-gray-400 border-2 rounded mx-auto  mt-4 px-4 ">
      <div className=" bg-black rounded-lg shadow-md p-4 ">
        <h2 className="text-lg font-semibold mb-2 ">ART GALLERY SYSTEM using HTML,CSS and JS
</h2>
        <p className="text-white md:text-base text-sm">Developed an Art Gallery System using HTML, CSS, JavaScript, and PHP. The system allows users to browse, search, and view art pieces, with a secure login for artists to upload and manage their artworks. It features a responsive design for seamless viewing on any device, dynamic image galleries, and an intuitive interface to enhance user experience.</p>
        <a href="https://github.com/prathyushaa5/artgallery"><FaGithub className=" text-white w-8 mt-4"/></a>
      </div>
    </div>
    <div className="container  sm:text-sm  border-gray-400 border-2 rounded  mx-auto mt-4 px-4">
      <div className="bg-black rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 text-white">WEATHER APP using React and open-meteo API</h2>
        <p className="text-white md:text-base text-sm">I developed a dynamic Weather App using React and the Open-Meteo API. The app offers real-time weather data, including temperature, timings, and wind speed for multiple countries. It showcases my proficiency in React and API integration with an intuitive interface, responsive design, and accurate weather updates.</p>
        <a href="https://github.com/prathyushaa5/Weather-app"><FaGithub className="text-white w-8 mt-4"/></a>
      </div>
    </div>
    </div>
   
        
          
        </div>
   
  )
};

export default Project;