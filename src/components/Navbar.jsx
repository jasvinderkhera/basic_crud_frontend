import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar">
      <div className="start">
        <button className="ham" onClick={toggleVisibility}>
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        {isVisible && (
          <div className="navBar" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <div className="newpost">
              <Link to="/NewPosts" className="nav-link new">
                + NEW POST
              </Link>
            </div>
            <div>
              <Link to="/Posts" className="nav-link">
                Posts
              </Link>
            </div>
            <div>
              <Link to="/Categories" className="nav-link">
                Categories
              </Link>
            </div>
            <div>
              <Link to="/Stats" className="nav-link">
                Stats
              </Link>
            </div>
            <div>
              <Link to="/Comments" className="nav-link">
                Comments
              </Link>
            </div>
            <div>
              <Link to="/Pages" className="nav-link">
                Pages
              </Link>
            </div>
            <div>
              <Link to="/Settings" className="nav-link">
                Settings
              </Link>
            </div>
          </div>
        )}
        <img src={img} alt="Logo" />
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search posts"
          className="search_input"
        />
      </div>
      <div className="end">
        <Link to="/Logout" className="nav-link">Logout</Link>
        <img src="" alt="Profile" className="profile" />
      </div>
    </div>
  );
}

export default Navbar;
