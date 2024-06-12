import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <nav className="nav flex-column">
        <NavLink to="/dashboard" className="nav-link" activeClassName="active-link">
          <span className="icon">📊</span> Dashboard
        </NavLink>
        <NavLink to="/users" className="nav-link" activeClassName="active-link">
          <span className="icon">👤</span> Users
        </NavLink>
        <NavLink to="/settings" className="nav-link" activeClassName="active-link">
          <span className="icon">⚙️</span> Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;


