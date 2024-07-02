import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="mt-40 flex flex-col items-center">
      <div className="container">
        {/* Email */}
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-4xl mr-2 text-gray-600" />
          <a href="mailto:prathyushaacharya050@gmail.com">prathyushaacharya050@gmail.com</a>
        </div>
        
        {/* Phone */}
        <div className="flex items-center mb-4">
          <FaPhone className="text-4xl mr-2 text-gray-600" />
          <a href="tel:7483259731">7483259731</a>
        </div>
        
        {/* Social Icons */}
        <div className="flex">
          <a href="" className="mr-4"><FaInstagram className="text-4xl text-pink-500 hover:text-pink-700" /></a>
          <a href="https://www.linkedin.com/in/prathyusha-acharya/" className="mr-4"><FaLinkedin className="text-4xl text-blue-500 hover:text-blue-700" /></a>
          <a href="#" className="mr-4"><FaFacebook className="text-4xl text-blue-700 hover:text-blue-900" /></a>
          <a href="https://wa.me/7338499857"><FaWhatsapp className="text-4xl text-green-500 hover:text-green-700" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
