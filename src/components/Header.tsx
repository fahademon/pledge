import React from 'react';
import { Link } from 'react-router-dom';
//import { FaDollarSign } from 'react-icons/fa';
//import logo from '@/assets/logo.png'; // Import the logo image

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-title">
        <img src="/pledge.png" alt="Finance Tracker Logo" className="app-logo" /> {/* Logo image */}
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
