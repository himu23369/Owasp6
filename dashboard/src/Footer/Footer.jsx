import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='FooterBody'>
            <hr />
            <div className="footer">
                <div className="logoName">
                    <img src="src/assets/logo.png" alt="" />
                    Arogya Bharat
                </div>

                <div className="quickLinks">
                    <h3>Quick Links</h3>
                    <div className="linkTable">
                        <Link to="/" className='link'>Home</Link>
                        <Link to="/" className='link'>Appointment</Link>
                        <Link to="/" className='link'>Service</Link>
                        <Link to="/" className='link'>About Us</Link>
                    </div>
                </div>

                <div className="hours">
                    <h3>Hours</h3>
                    <div className="timeTable">
                        <div className="days">
                            <span>Monday</span>
                            <span>Tuesday</span>
                            <span>Wednesday</span>
                            <span>Thursday</span>
                            <span>Friday</span>
                        </div>
                        <div className="time">
                            <span>9:00 - 18:00</span>
                            <span>9:00 - 18:00</span>
                            <span>9:00 - 18:00</span>
                            <span>9:00 - 18:00</span>
                            <span>9:00 - 18:00</span>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div className="contactBox">
                        <div className="icons">
                            <div className="information">
                                <BsFillTelephoneFill size={20} />
                                +91 70875-70875
                            </div>
                            <div className="information">
                                <FiMail size={20} />
                                rsampadacontactus@gmail.com
                            </div>
                            <div className="information">
                                <FaLocationArrow size={20} />
                                EveryWhere
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
