import React, { useState } from 'react'
import './appointment.css'
import { addAppointment } from '../Firebase/CRUDOperations';
import ScrollButton from './scrollButton';
export default function AppointmentPage() {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        DOB: '',
        gender: '',
        appointmentDate: '',
        departmentName: '',
        problem: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addAppointment(formData)
            .then((mess) => { console.log("Added Successfully") })
            .catch((err) => console.log(err))
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            DOB: '',
            gender: '',
            appointmentDate: '',
            departmentName: '',
            problem: '',
        });

    };
    return (
        <div className='landingPageBackground'>
            <div id="landingPageNavbar">
                <div className='logoWithName'>
                    <img src="src/assets/logo.png" alt="" />
                    <span>NirogSampada</span>
                </div>
            </div>
            <div className='generalInfo1'>
                <div className='generalInfoLeft1'>
                    <h1 className='heading1'>
                        Book Your Appointment Now!
                    </h1>
                    <span className='paragraph1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis cumque beatae. Odit labore dolor ab recusandae! Repudiandae libero tempore, rerum laudantium eveniet consequatur hic itaque, animi maiores, expedita vitae.
                    </span>
                    <ScrollButton/>
                </div>
                <div className='generalInfoRight1'>
                    <div className='characters1'>
                        <span className='characters1'>
                            <div className='characters2'>
                            </div>
                        </span>

                    </div>
                </div>

            </div>
            <div className='rehabForm'>
                <h1 className='heading3'>
                    Appointment Form

                </h1>
                <div className='main_form'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='labell'>
                                <label>
                                    First Name
                                    <br></br>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className='labell'>
                                <label>
                                    Last Name:
                                    <br></br>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='labell'>
                                <label>
                                    Email:
                                    <br></br>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className='labell'>
                                <label>
                                    Mobile Number:
                                    <br></br>
                                    <input
                                        type="number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='labell'>
                                <label>
                                    Date of Birth:
                                    <br></br>
                                    <input
                                        type="date"
                                        name="DOB"
                                        value={formData.DOB}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className='labell'>
                                <label>
                                    Gender:
                                    <br></br>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='labell'>
                                <label>
                                    Appointment Date:
                                    <br></br>
                                    <input
                                        type="date"
                                        name="appointmentDate"
                                        value={formData.appointmentDate}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            {/* <div className='labell'>
                                <label>
                                    Appointment Time:
                                    <br></br>
                                    <input
                                        type="time"
                                        name="appointmentTime"
                                        value={formData.appointmentTime}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div> */}
                        </div>
                        {/* <div className='row'>
                            <div className='labell'>
                                <label>
                                    Department Name:
                                    <br></br>
                                    <input
                                        type="text"
                                        name="departmentName"
                                        value={formData.departmentName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className='labell'>
                                <label>
                                    Doctor Name:
                                    <br></br>
                                    <input
                                        type="text"
                                        name="doctorName"
                                        value={formData.doctorName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        </div> */}
                        <div className='row'>
                            <div className='labell'>
                                <label>
                                    Discription
                                    <br></br>
                                    <textarea
                                        name="problem"
                                        value={formData.problem}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </label>
                                <div className='bt'>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
