import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { MdPerson } from 'react-icons/md'
import './Admin.css';
import Box from '../Box/Box.jsx';
import { FaUser } from 'react-icons/fa';
import DataBox from '../DataBox/AppointmentDataBox.jsx';
import userContext from '../context/users/userContext.jsx';


const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(userContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className='navbar'>

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
              <img src="src/assets/logo.png" alt="Arogya Bharat logo" />
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
      </div>

      <div className="admin">

        <div className='info-admin'>
          <div className='rowUp'>
          <div className='box'><Box text={'Total Organisations'} number={20} /></div>
          <div className='box'><Box text={'Pending Organisations'} number={34} /></div>
          </div>
          <div className='rowDown'>
          <div className='box'><Box text={'Feedbacks'} number={37} /></div>
          <div className='box'><Box text={'Total Caretakers'} number={100} /></div>
          </div>
        </div>


        {/* <div className='databox'>
          <DataBox name={'Patients'} />
          <DataBox name={'Appointments'} />

        </div> */}

      </div>

    </>
  );
};

export default Admin;