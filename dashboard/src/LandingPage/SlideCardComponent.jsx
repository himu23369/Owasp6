import React from 'react'
import './SlideCardComponent.css'
export default function SlideCardComponent(props) {


    return (
        <div className='cardOuterBox'>
            <div className="cardMainBox">
                <div className="imageCover"
                    style={
                        {
                            backgroundImage: `url(${props.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }
                    }>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}
