import React, { useEffect, useState } from 'react'
import './AppointmentDataBox.css'
import { getAppointment } from '../Firebase/CRUDOperations'

const AppointmentDataBox = ({ name }) => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const initialFetch = () => {
      getAppointment()
        .then((data) => {
          setPatientData(data);
        })
        .catch(error => console.log(error));
    }

    initialFetch();
  }, []);

  return (
    <div className='data-box'>
      <b><u>{name}</u></b>
      <div className="data-container">
        <table className="appointment-data">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              patientData.map((patientData, index) => (
                <tr key={index}>
                  <td>{`${patientData['firstName']} ${patientData['lastName']}`}</td>
                  <td>{patientData['appointmentDate']}</td>
                  <td>{patientData['status']}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppointmentDataBox