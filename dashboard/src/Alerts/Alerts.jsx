import React from 'react'
// import DataBox from '../DataBox/DataBox'
import './Alerts.css'
import AlertDataBox from '../DataBox/AlertDataBox'

const Alerts = () => {
    return (
        <div>
            <div className='databox'>
                <AlertDataBox name={'Patient Out'} />
            </div>
        </div>
    )
}

export default Alerts
