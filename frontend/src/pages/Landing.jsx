import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/landing.css';

const Landing = () => {
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);

  return (
    <div className="landing-wrapper">
      {/* Dynamic Background Elements */}
      <div className="bg-glow top-left"></div>
      <div className="bg-glow bottom-right"></div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="brand-logo">BITE<span>.</span></div>
          <div className="nav-menu">
            <Link to="/user/login" className="nav-item">Login</Link>
            
            {/* Signup Dropdown Button */}
            <div className="signup-dropdown">
              <button 
                className="nav-btn signup-btn"
                onClick={() => setShowSignupDropdown(!showSignupDropdown)}
              >
                Sign Up ▼
              </button>
              
              {showSignupDropdown && (
                <div className="dropdown-menu">
                  <Link 
                    to="/user/register" 
                    className="dropdown-item"
                    onClick={() => setShowSignupDropdown(false)}
                  >
                    👤 As Customer
                  </Link>
                  <Link 
                    to="/food-partner/register" 
                    className="dropdown-item"
                    onClick={() => setShowSignupDropdown(false)}
                  >
                    🍽️ As Restaurant
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Video-First Gastronomy</span>
            <h1 className="main-title">
              Taste <br /> 
              <span className="gradient-text">In Motion.</span>
            </h1>
            <p className="description">
              Stop guessing from static photos. Experience the sizzle and the texture through high-fidelity video stories before you order.
            </p>
            <div className="cta-group">
              <Link to="/register" className="primary-btn">Explore Now</Link>
              <Link to="/food-partner/register" className="secondary-btn">Partner with us</Link>
            </div>
          </motion.div>

          <div className="hero-visual">
            <div className="phone-container">
              <div className="phone-frame">
                <div className="dynamic-island"></div>
                <div className="phone-content">
                  {/* High quality food video loop */}
                  <video autoPlay muted loop playsInline className="app-video">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-fresh-sushi-roll-on-a-plate-19195-large.mp4" type="video/mp4" />
                  </video>
                  <div className="video-ui-overlay">
                    <div className="user-tag">@sushi_master</div>
                    <div className="progress-bar"><div className="fill"></div></div>
                  </div>
                </div>
              </div>
              {/* Floating modern card */}
              <div className="floating-card">
                <span className="rating">★ 4.9</span>
                <span className="label">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;