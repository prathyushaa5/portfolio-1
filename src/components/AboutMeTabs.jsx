import React, { useState } from 'react';
import photo1 from '../assets/c.jpg'
import photo2 from '../assets/c++.jpg'
import photo8 from '../assets/html.png'
import photo6 from '../assets/python.png'
import photo7 from '../assets/java.jpg'
import photo3 from '../assets/css.png'
import photo4 from '../assets/js.png'
import photo5 from '../assets/react.png'
import photo9 from '../assets/mongo.png'
import photo10 from '../assets/vs.webp'
import photo11 from '../assets/github.webp'
import photo12 from "../assets/tailwind.png"
const AboutMeTabs = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
        
        </div>
        <div className="md:w-2/3 md:pl-8">
          {/* About Me */}
          {/* <h1 className="aboutme text-3xl font-bold mb-4">About Me</h1> */}
         

          {/* Tab Titles */}
          <div className="tab-titles mt-4 flex">
            <p
              className={`title-tab ${activeTab === 'skills' ? 'active-link text-gray-500' : 'text-white-500'}`}
              onClick={() => openTab('skills')}
            >
              Skills
            </p>
            <p
              className={`title-tab ${activeTab === 'internship' ? 'active-link text-gray-500' : 'text-white-500'} ml-8`}
              onClick={() => openTab('internship')}
            >
              Internship
            </p>
            <p
              className={`title-tab ${activeTab === 'education' ? 'active-link text-gray-500' : 'text-white-500'} ml-8`}
              onClick={() => openTab('education')}
            >
              Education
            </p>
          </div>

          {/* Tab Contents */}
          <div className="tab-contents mt-4">
            <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : 'hidden'}`} id="skills">
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold text-white">Web development:</span> Designing web apps
                </li>
                <li>
                  <span className="font-bold text-white">Front-end development:</span> Using HTML, CSS, JavaScript
                </li>
                <li>
                  <span className="font-bold text-white">Problem-solving:</span> Algorithm design and analysis
                </li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'internship' ? 'active-tab' : 'hidden'}`} id="internship">
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold text-white">Zephyr Technologies, Mangalore:</span> 
                  <p>During this internship, I worked on various web development projects.I gained hands-on experience in building responsive web applications.This internship enhanced my skills in front-end development with Bootstrap, including creating layouts, forms etc</p></li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'education' ? 'active-tab' : 'hidden'}`} id="education">
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold text-white">2019:</span> Delhi Public School
                </li>
                <li>
                  <span className="font-bold text-white">2021:</span> Govinda Dasa PU College
                </li>
                <li>
                  <span className="font-bold text-white">2025:</span> St Joseph Engineering College
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        
      </div>
      <div className="flex w-full p-10 bg-black text-white flex-wrap flex-col justify-center ml-0 mr-0 mt-20 gap-4">
      <div className="flex items-center gap-3  justify-center  align-center">
        Languages:<img src={photo1} alt="Photo 1" className=" md:w-12  w-6 " />
        <img src={photo2} alt="Photo 2" className=" md:w-12 w-6 " />
        <img src={photo8} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo6} alt="Photo 4" className="  md:w-12 w-6 " />
        <img src={photo7} alt="Photo 5" className="  md:w-12 w-6 " />
        <img src={photo3} alt="Photo 6" className=" md:w-12 w-6 " />
        <img src={photo4} alt="Photo 7" className=" md:w-12  w-6 " />
      </div>
      <div className="flex items-center  justify-center gap-4">
        Libraries&Tools:
        <img src={photo5} alt="Photo 2" className=" md:w-12 w-6 " />
        <img src={photo9} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo10} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo11} alt="Photo 3" className=" md:w-12 w-6 " />
       <img src={photo12} alt="Photo 4" className=" md:w-12 w-6"/>
      </div>
    </div>
    </div>
  );
};

export default AboutMeTabs;
