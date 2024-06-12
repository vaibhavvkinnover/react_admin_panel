import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavbar />
        <div className="d-flex">
          <Sidebar />
          <div className="content p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>} />
              <Route path="/settings" elementt={<Settings/>} />
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
