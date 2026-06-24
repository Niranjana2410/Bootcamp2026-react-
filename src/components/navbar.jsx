import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Closes the mobile menu after clicking a section link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#Welcome" onClick={handleLinkClick}>Home</a>
        <a href="#About" onClick={handleLinkClick}>About</a>
        <a href="#Skills" onClick={handleLinkClick}>Skills</a>
        <a href="#Projects" onClick={handleLinkClick}>Projects</a>
        <a href="#Contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
