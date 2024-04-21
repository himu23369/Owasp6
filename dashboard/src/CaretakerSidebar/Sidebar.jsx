import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>Caretaker Portal</h3>
        <button onClick={toggle}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/addPatient">Add New Patient</Link>
        </li>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
        {/* <li><Link to="/patientOut">Patient Out</Link></li> */}
        {/* <li><Link to="/unknownPersonAlert">Unknown Person Alert</Link></li> */}
        <li>
          <Link to="/reports">Upload Reports</Link>
        </li>
        <li>
          <Link to="/contactGuardian">Contact Guardian</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
