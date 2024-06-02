import React, { useState } from 'react';
// Make sure your CSS file path is correct

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleCancelClick = () => {
    setMenuActive(false);
    setSearchActive(false);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={handleMenuClick}>
        <span className="fas fa-bars"></span>
      </div>
      <div className="logo">
        CodingNepal
      </div>
      <div className={`nav-items ${menuActive ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </div>
      <div className="search-icon" onClick={handleSearchClick}>
        <span className="fas fa-search"></span>
      </div>
      <div className="cancel-icon" onClick={handleCancelClick}>
        <span className="fas fa-times"></span>
      </div>
      <form className={`${searchActive ? 'active' : ''}`}>
        <input type="search" className="search-data" placeholder="Search" required />
        <button type="submit" className="fas fa-search"></button>
      </form>
    </nav>
  );
};

export default Navbar;
