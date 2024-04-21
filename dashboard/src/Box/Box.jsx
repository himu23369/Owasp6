import React from 'react';
import { FaSyringe, FaThermometer, FaHome, FaMedkit, FaUser } from 'react-icons/fa';
import './Box.css';

const Box = ({text, number}) => {
    return (
        <div className="info-card">
            <div className="info-item">
                <div className="left"><FaUser /></div>
                <div className="right">{text}</div>
                <span>{number}</span>
            </div>
            {/* <div className="info-item">
                <div className="left"><FaSyringe /></div>
                <div className="right">Total Doctors</div>
                <span>20</span>
            </div>
            <div className="info-item">
                <div className="left"><FaHome /></div>
                <div className="right">Total Wards</div>
                <span>20</span>
            </div>
            <div className="info-item">
                <div className="left"><FaMedkit /></div>
                <div className="right">Total Caretakers</div>
                <span>20</span>
            </div> */}
        </div>
    );
};

export default Box;