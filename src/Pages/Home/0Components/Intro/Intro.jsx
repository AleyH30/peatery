import React from "react";
import './Intro.css';
import video1 from "../../../../0Components/images/promo.mp4"

const Intro = () => {
    
    return (
        <div className="intro-container">
            <div className="intro-contents">
                <video className="intro-video" autoPlay muted loop>
                    <source src={video1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p className="intro-text-left">Finest Dining</p>
                <p className="intro-text-right">Established 1942.</p>
            </div>
        </div>
    )
}

export default Intro