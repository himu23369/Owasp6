import React from 'react'
import './LandingPage.css'
import SlideCardComponent from './SlideCardComponent'
import Footer from './Footer'
import { useNavigate } from 'react-router';
export default function LandingPage() {

    let navigation = useNavigate();

    const handleOnClick = (e) => {
        e.preventDefault();
        navigation(`/${e.target.value}`)
    }

    return (
        <div className='landingPageBackground'>
            <div id="landingPageNavbar">
                <div className='logoWithName'>
                    <img src="src/assets/logo.png" alt="" />
                    <span>Arogya Bharat</span>
                </div>
            </div>
            <div className="generalInfo">
                <div className="generalInfoLeft">
                    <h1 className='heading'>
                        Your Journey To Wellness Starts Here
                    </h1>
                    <span className='paragraph'>
                        Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    </span>
                    <div className='authOptions'>
                        <button className="authButton" value="appointment" onClick={handleOnClick}
                        >
                            GET STARTED
                        </button>
                        <button className="authButton" value='signIn' onClick={handleOnClick}>
                            ALREADY HAVE AN ACCOUNT?
                        </button>
                    </div>
                </div>
                <div className="generalInfoRight">
                    <div className="characters">
                        <div className="character1">

                        </div>
                        <div className="character2">

                        </div>
                    </div>
                </div>
            </div>
            <div className="whoWeAre">
                <div className="leftBlock">

                </div>
                <div className="rightBlock">
                    <h1 className="heading">
                        Who we are?
                    </h1>
                    <div className="paragraph">
                        Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                        Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.

                        It's 2019: time to sink or swim.

                        We are your Social Media Marketing Agency.
                    </div>
                    <div className="moreInfoBtn">
                        See More
                    </div>
                </div>
            </div>
            <div className="slideCardBox">
                <h1>Get Rid of</h1>
                <div className="slideCard">
                    {<SlideCardComponent image='src/assets/LandingPage/drug.png' text="Drug Addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/alcohol.png' text="Alcohol Addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/nicotine.png' text="Nicotine Addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/image.png' text="Addiction" />}
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5720.110144094836!2d77.0971928757429!3d28.48671142217681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ffa168b5a55%3A0x818faf70358dc1c7!2sRoar%20Wellness%20De%20Addiction%20Centre!5e0!3m2!1sen!2sin!4v1712252124618!5m2!1sen!2sin" width="600" height="450" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {<Footer />}
        </div>
    )
}
