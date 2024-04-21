import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../GuardianSidebar/Sidebar.jsx';
import { MdPerson } from 'react-icons/md'
import './Guardian.css';
import Box from '../Box/Box.jsx';
import { FaUser } from 'react-icons/fa';
import DataBox from '../DataBox/AppointmentDataBox.jsx';
import userContext from '../context/users/userContext.jsx';



const Guardian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(userContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="admin">

        <Sidebar isOpen={isOpen} toggle={toggle} />

        <nav className="navbar">
          <div className="navbar-left">
            <div className="menu-icon" onClick={toggle}>
              <FaBars />
            </div>
          </div>
          <div className="patient-info">
            <span className="patient-name">{user['name']}</span>
          </div>
          <div className="rehab-info">
            <div className="logoWithName">
              <img src="src/assets/logo.png" alt="NirogSampada logo" />
              <span>Arogya Bharat</span>
            </div>
          </div>
          <div className="person-info">
            {/* <MdPerson /> */}
            <span><b>{user['id']}</b></span>
          </div>
          <div className="circle-icon">
            {/* <MdPerson /> */}
          </div>
        </nav>

        {/* <div className='box'><Box /></div> */}

        <div className='databox'>
          <DataBox name={'Appointments'} />

        </div>

      </div>

    </>
  );
};

export default Guardian;