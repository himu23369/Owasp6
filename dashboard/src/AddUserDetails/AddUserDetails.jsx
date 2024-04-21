import React, { useContext, useState } from 'react'
import userContext from '../context/users/userContext';
import { addUserDetails } from '../Firebase/CRUDOperations';
import { useNavigate } from 'react-router-dom';
import './AddUserDetails.css'
import Navbar from '../Navbar/Navbar';

export default function AddUserDetails() {
    let tempData = {
        'BloodPressure': {
            'value': {
                'systolic': 110,
                'diastolic': 82,
            }
        },
        'HeartRate': {
            'value': 85
        },
        'Calories': {
            'value': {
                'Breakfast': 350,
                'Lunch': 500,
                'Dinner': 600,
            }
        },
        'Mood': {
            'value': {
                "Happy": 5,
                "Energetic": 7,
                "Anxiety": 5,
            }
        },
        'Sleep': {
            'value': 9
        },
        'Water': {
            'value': 4000
        }
    }
    const { user } = useContext(userContext)
    const [userReport, setUserReport] = useState(tempData);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userReport);
        console.log(user);
        addUserDetails(user['id'], userReport)
            .then((data) => {
                console.log("Added Successfully");
                navigate("/");
            })
    }

    return (
        <>
            <div className='nav'><Navbar /></div>
            <div className='container_form my-5 mx-5' >
                <div className='formName'>
                    <h2>ENTER DAILY REPORTS!</h2>
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                    {/* <div className="report">Report Form</div> */}
                    <div className="my-2">
                        <div className="hr">
                            Patient ID
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Patient Id"
                                name='Heart-Rate'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'PatientId': {
                                            'value': Number(e.target.value)
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>



                    <div className='bp'>Blood Pressure</div>
                    <div className="my-2">
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Systolic"
                                name='Systolic'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'BloodPressure': {
                                            'value': {
                                                ...temp['BloodPressure']['value'],
                                                'systolic': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Diastolic"
                                name='Diastolic'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'BloodPressure': {
                                            'value': {
                                                ...temp['BloodPressure']['value'],
                                                'diastolic': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="hr">
                            Heart Rate
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Heart Rate"
                                name='Heart-Rate'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'HeartRate': {
                                            'value': Number(e.target.value)
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="my-2">
                        <div>Calories</div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Breakfast"
                                name='Breakfast'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Calories': {
                                            'value': {
                                                ...temp['Calories']['value'],
                                                'Breakfast': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Lunch"
                                name='Lunch'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Calories': {
                                            'value': {
                                                ...temp['Calories']['value'],
                                                'Lunch': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Dinner"
                                name='Dinner'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Calories': {
                                            'value': {
                                                ...temp['Calories']['value'],
                                                'Dinner': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div>Mood</div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Happy"
                                name='Happy'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Mood': {
                                            'value': {
                                                ...temp['Mood']['value'],
                                                'Happy': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Energetic"
                                name='Energetic'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Mood': {
                                            'value': {
                                                ...temp['Mood']['value'],
                                                'Energetic': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Anxiety"
                                name='Anxiety'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Mood': {
                                            'value': {
                                                ...temp['Mood']['value'],
                                                'Anxiety': Number(e.target.value)
                                            }
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            Sleep
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Sleep"
                                name='Sleep'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Sleep': {
                                            'value': Number(e.target.value)
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            Water
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Water"
                                name='Water'
                                onChange={(e) => {
                                    let temp = userReport;
                                    temp = {
                                        ...temp,
                                        'Water': {
                                            'value': Number(e.target.value)
                                        }
                                    }
                                    setUserReport(temp);
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
