import React from 'react';
import './appointment.css'
const ScrollButton = () => {
    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight, // Scroll down by the height of the viewport
            behavior: 'smooth' // Smooth scroll animation
        });
    };

    return (
        <button className='fill1' onClick={handleClick}>
            Book Now!
        </button>
    );
};

export default ScrollButton;