import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Admin Portal</h3>
        <button onClick={toggle}><FaTimes /></button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/approve">Organisation Approval</Link></li>
        <li><Link to="/resolve">Resolve Feedback</Link></li>
        <li><Link to="/manageCaretakers">Manage Caretakers</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;