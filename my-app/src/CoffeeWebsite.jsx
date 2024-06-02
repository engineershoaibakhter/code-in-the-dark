import React, { useState } from 'react';
import './CoffeeWebsite.css';


const CoffeeWebsite = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="logo" href="#">Coffee<span>.</span></a>
          <ul className={`menu-links ${showMobileMenu ? 'active' : ''}`}>
            <span id="close-menu-btn" className="material-symbols-outlined" onClick={closeMobileMenu}>close</span>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <span id="hamburger-btn" className="material-symbols-outlined" onClick={toggleMobileMenu}>menu</span>
        </nav>
      </header>

      <section className="hero-section">
        <div className="content">
          <h2>Start Your Day With Fresh Coffee</h2>
          <p>
            Coffee is a popular and beloved beverage enjoyed by 
            people around the world. Awaken your senses with a steaming cup of liquid motivation.
          </p>
          <button>Order Now</button>
        </div>
      </section>
    </div>
  );
};

export default CoffeeWebsite;
