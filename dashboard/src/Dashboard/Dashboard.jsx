import React, { useContext, useEffect, useState } from 'react'
// import './Dashborad.css'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { getDetails } from '../Firebase/CRUDOperations';
import { formatBloodPressure, formatCalorie, formatHeartRate, formatMood, formatSleep, formatWater } from '../Firebase/formatResponse';
import userContext from '../context/users/userContext';
import './Dashboard.css';

function Dashboard() {
    const [BloodPressure, setBloodPressure] = useState();
    const [HeartRate, setHeartRate] = useState();
    const [Calories, setCalories] = useState();
    const [Sleep, setSleep] = useState();
    const [Mood, setMood] = useState();
    const [Water, setWater] = useState();

    const { user } = useContext(userContext);

    async function initialData() {
        let id = user['id'];
        await getDetails(id, 'BloodPressure')
            .then((data) => { setBloodPressure(formatBloodPressure(data)) });
        await getDetails(id, 'HeartRate')
            .then((data) => { setHeartRate(formatHeartRate(data)) });
        await getDetails(id, 'Calories')
            .then((data) => { setCalories(formatCalorie(data)) });
        await getDetails(id, 'Sleep')
            .then((data) => { setSleep(formatSleep(data)) });
        await getDetails(id, 'Mood')
            .then((data) => { setMood(formatMood(data)) });
        await getDetails(id, 'Water')
            .then((data) => { setWater(formatWater(data)) });
    }
    useEffect(() => {
        initialData();
    }, [])
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
                <h3>{user['name']} - {user['id']}</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>DAYS SPENT</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>7</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>INBOX</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={Sleep}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sleep" fill="#8884d8" />
                        {/*  <Bar dataKey="water" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={BloodPressure}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="systolic" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="distolic" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={Calories}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Breakfast" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Lunch" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="Dinner" stackId="a" fill="#ffffff" />

                        {/*  <Bar dataKey="water" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={HeartRate}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="heart rate" stroke="#8884d8" activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>

            </div>
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={Mood}
                        layout="vertical"
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="date" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Happy" fill="#8884d8" />
                        <Bar dataKey="Energetic" fill="#82ca9d" />
                        <Bar dataKey="Anxiety" fill="#ffffff" />

                        {/*  <Bar dataKey="water" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={300}
                        data={Water}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="water" stroke="#8884d8" activeDot={{ r: 8 }} />

                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Dashboard