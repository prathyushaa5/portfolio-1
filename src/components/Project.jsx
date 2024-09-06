import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-8">
      {/* Project 1 */}
      <div className="max-w-xl w-full bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Blood Management System using Tkinter</h2>
          <p className="text-sm text-gray-300 mb-4">
            I developed a comprehensive Blood Management System using Python's Tkinter library to streamline the management of blood donations and inventory. The system allows users to register donors, track blood types, and monitor stock levels efficiently.
          </p>
          <a
            href="https://github.com/prathyushaa5/BloodManagmentSystem"
            className="flex items-center text-gray-300 hover:text-gray-200"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="max-w-xl w-full bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Art Gallery System using HTML, CSS and JS</h2>
          <p className="text-sm text-gray-300 mb-4">
            Developed an Art Gallery System using HTML, CSS, JavaScript, and PHP. The system allows users to browse, search, and view art pieces, with a secure login for artists to upload and manage their artworks.
          </p>
          <a
            href="https://github.com/prathyushaa5/artgallery"
            className="flex items-center text-gray-300 hover:text-gray-200"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="max-w-xl w-full bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Weather App using React and open-meteo API</h2>
          <p className="text-sm text-gray-300 mb-4">
            I developed a dynamic Weather App using React and the Open-Meteo API. The app offers real-time weather data, including temperature, timings, and wind speed for multiple countries.
          </p>
          <a
            href="https://github.com/prathyushaa5/WeatherApp"
            className="flex items-center text-gray-300 hover:text-gray-200"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
       {/* Project  */}
       <div className="max-w-xl w-full bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Book Bridge Using MERN</h2>
          <p className="text-sm text-gray-300 mb-4">
          Developed Book Bridge, a MERN stack application enabling users to buy and sell books seamlessly. This platform provides a user-friendly interface for managing listings, processing transactions, and connecting book enthusiasts.
          </p>
          <a
            href="https://github.com/prathyushaa5/Book-Store"
            className="flex items-center text-gray-300 hover:text-gray-200"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
