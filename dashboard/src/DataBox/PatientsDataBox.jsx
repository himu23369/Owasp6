import React, { useEffect, useState } from 'react'
import { getAllPatients } from '../Firebase/CRUDOperations';
import './PatientsDataBox.css'


export default function PatientsDataBox({ name }) {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const initialFetch = () => {
            getAllPatients()
                .then((data) => {
                    setPatients(data);
                })
                .catch(error => console.log(error));
        }
        initialFetch();
    }, []);

    return (
        <div className='patientsDataBox'>
            <b><u>{name}</u></b>
            {/* <ol className="data">
                {
                    patients.map((patientData, index) => {
                        return (
                            <table key={index} className="patient-data">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{patientData['name']}</td>
                                        <td>{patientData['id']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }
            </ol> */}
            <div className="patient-data-container">
                <table className="patient-data">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((patientData, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{patientData['name']}</td>
                                        <td>{patientData['id']}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
