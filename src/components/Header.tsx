

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_NAME } from '../constants/constants';



  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
  ];




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const headerRef = useRef<HTMLDivElement>(null); // Reference to the header
  const brandRed = "#e51c23";

  // Close menu if clicked outside of the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header ref={headerRef} className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      {/* Desktop & Base Header */}
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 outline-none">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-sm md:text-xl font-bold tracking-tight text-black uppercase">
            {COMPANY_NAME}
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[${brandRed}] ${
                location.pathname === link.path ? `text-[${brandRed}]` : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button 
            style={{ backgroundColor: brandRed }}
            className="hidden cursor-pointer md:block text-white px-8 py-2.5 rounded-sm font-bold text-sm hover:brightness-110 transition-all shadow-sm"
            onClick={() => {
                  setIsOpen(false); // Closes menu when button is clicked
                  navigate("/contact");
                }}
          >
            GET IN TOUCH
          </button>

          {/* Mobile Menu Icon (Font Awesome) */}
          <button 
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  
                  className="text-sm font-bold uppercase tracking-wide text-gray-800 flex justify-between items-center"
                >
                  {link.name}
                  <i className="fa-solid fa-chevron-right text-xs opacity-30"></i>
                </Link>
              ))}
              <button 
                style={{ backgroundColor: brandRed }}
                className=" cursor-pointer text-white py-2 rounded-sm font-bold mt-2 px-7 w-fit mx-auto"
                // onClick={()=> navigate("/contact")}
                onClick={() => {
                  setIsOpen(false); // Closes menu when button is clicked
                  navigate("/contact");
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}