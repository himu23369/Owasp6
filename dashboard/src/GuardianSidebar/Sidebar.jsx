import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Guardian Portal</h3>
        <button onClick={toggle}><FaTimes /></button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/guardianReports">Reports</Link></li>
        <li><Link to="/requirements">Requirements</Link></li>
        <li><Link to="/contactCaretaker">Contact Caretaker</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;