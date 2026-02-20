import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="logo">
            🍕 Video Zomato
          </Link>
        </div>
        
        <div className="header-right">
          <Link to="/register" className="btn btn-outline">
            Sign Up
          </Link>
          <Link to="/user/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;