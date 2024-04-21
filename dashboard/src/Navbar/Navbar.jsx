import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}

        {/* <div className="navbar-left">
          <div className="menu-icon" onClick={toggle}>
            <FaBars />
          </div>
        </div> */}
        {/* <div className="patient-info">
          <span className="patient-name">{user['name']}</span>
        </div> */}
        <div className="rehab-info">
          <div className="logoWithName">
            <img src="src/assets/logo.png" alt="NirogSampada logo" />
            <span>Arogya Bharat</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar