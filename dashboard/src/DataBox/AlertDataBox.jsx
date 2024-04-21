// import React, { useEffect, useState } from 'react'
// import './AlertDataBox.css'
// import { patientOut } from '../Firebase/CRUDOperations'

// const AlertDataBox = ({ name }) => {

//     const [patientData, setPatientData] = useState([]);

//     useEffect(() => {
//         const initialFetch = () => {
//             patientOut()
//                 .then((data) => {
//                     setPatientData(data);
//                 })
//                 .catch(error => console.log(error));
//         }

//         initialFetch();
//     }, []);

//     return (
//         <div className='data-box'>
//             {name}
//             <div className="data">
//                 <div className="heading">
//                     <div className="fullName">Full Name</div>
//                     <div className="date">Time</div>
//                 </div>
//                 <div className="data">
//                     {
//                         patientData.map((patientData, index) => {
//                             return (
//                                 <div key={index} className='heading'>
//                                     <div className="fullName">
//                                         {patientData['name']}
//                                     </div>
//                                     <div className="date">
//                                         {patientData['timestamps'][patientData.timestamps.length - 1]}
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AlertDataBox

import React, { useEffect, useState } from 'react'
import './AlertDataBox.css'
import { patientOut } from '../Firebase/CRUDOperations'

const AlertDataBox = ({ name }) => {

    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        const initialFetch = () => {
            patientOut()
                .then((data) => {
                    setPatientData(data);
                })
                .catch(error => console.log(error));
        }

        initialFetch();
    }, []);

    return (
        <div className='alert-data-box'>
            <div className='top-heading'>
                <b>PATIENT OUT TIMING LIST</b>
            </div>
            <div className="alert-data">
                <div className="heading">
                    <div className="fullName"><b>Patient Name</b></div>
                    <div className="date"><b>Time Patient went out</b></div>
                </div>
                <div className="alert-data">
                    {
                        patientData.map((patientData, index) => {
                            return (
                                <div key={index} className='heading'>
                                    <div className="fullName">
                                        {patientData['name']}
                                    </div>
                                    <div className="date">
                                        {patientData['timestamps'][patientData.timestamps.length - 1]}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AlertDataBox

