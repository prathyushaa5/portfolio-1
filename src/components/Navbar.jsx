import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { FaLaptopCode } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'Project', path: '/project' },
    { link: 'Contact', path: '/contact' },
    
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 shadow-md' : ''}`}
        style={{ backgroundColor: '#000', color: '#fff' }} // Set background and text color here
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <FaLaptopCode className="w-10 h-10 text-white" />

          <Link to="/" className="text-2xl font-bold text-white-700 flex items-center gap-2">
          
          
          </Link>

          {/* Navigation items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base uppercase cursor-pointer hover:text-gray-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger menu button for small devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-white" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation items for small devices (mobile menu) */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}
          style={{ backgroundColor: '#000', color: '#fff' }} // Set background and text color here
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base uppercase cursor-pointer hover:text-gray-300"  onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
