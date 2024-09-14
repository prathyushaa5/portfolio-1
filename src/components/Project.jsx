import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useSpring, animated, config } from '@react-spring/web';

const projects = [
  {
    title: 'Blood Management System using Tkinter',
    description: "I developed a comprehensive Blood Management System using Python's Tkinter library to streamline the management of blood donations and inventory. The system allows users to register donors, track blood types, and monitor stock levels efficiently.",
    link: 'https://github.com/prathyushaa5/BloodManagmentSystem',
  },
  {
    title: 'Art Gallery System using HTML, CSS and JS',
    description: 'Developed an Art Gallery System using HTML, CSS, JavaScript, and PHP. The system allows users to browse, search, and view art pieces, with a secure login for artists to upload and manage their artworks.',
    link: 'https://github.com/prathyushaa5/artgallery',
  },
  {
    title: 'Weather App using React and open-meteo API',
    description: 'I developed a dynamic Weather App using React and the Open-Meteo API. The app offers real-time weather data, including temperature, timings, and wind speed for multiple countries.',
    link: 'https://github.com/prathyushaa5/WeatherApp',
  },
  {
    title: 'Book Bridge Using MERN',
    description: 'Developed Book Bridge, a MERN stack application enabling users to buy and sell books seamlessly. This platform provides a user-friendly interface for managing listings, processing transactions, and connecting book enthusiasts.',
    link: 'https://github.com/prathyushaa5/Book-Store',
  }
];

const Project = () => {
  // Create an array of spring animations with increasing delays
  const springs = projects.map((_, index) => 
    useSpring({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateY(20px)' },
      config: { ...config.slow, duration: 500 },
      delay: index * 300,  // Delay each project box to create a staggered effect
    })
  );

  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-16">
      {/* Animated Project Boxes */}
      {projects.map((project, index) => (
        <animated.div key={index} style={springs[index]} className={`max-w-3xl w-full bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 mb-8`}>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-base text-gray-300 mb-6">
              {project.description}
            </p>
            <a
              href={project.link}
              className="flex items-center text-gray-300 hover:text-gray-200"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              View on GitHub
            </a>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Project;
