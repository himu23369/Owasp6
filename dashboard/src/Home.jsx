import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line ,Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis, AreaChart,Area} 
 from 'recharts';


 import bp from './assets/bp.json'
 import heart from './assets/heart.json'
 import calorie from './assets/calorie.json'
 import sleep from './assets/sleep.json'
 import mood from './assets/mood.json'
 import water from './assets/water.json'
function Home() {

   

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DAYS SPENT</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>7</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div> */}
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div> */}
            <div className='card'>
                <div className='card-inner'>
                    <h3>INBOX</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={sleep}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
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
                data={bp}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="systolic" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={calorie}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Breakfast" stackId="a" fill="#8884d8" />
                <Bar dataKey="Lunch" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Dinner" stackId="a" fill="#FFFF00" />

              {/*  <Bar dataKey="water" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={heart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
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
            data={mood}
            layout="vertical"
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Happy"  fill="#8884d8" />
                <Bar dataKey="Energetic"  fill="#82ca9d" />
                <Bar dataKey="Anxiety"  fill="#ffffff" />

              {/*  <Bar dataKey="water" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={300}
                data={water}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
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

export default Home