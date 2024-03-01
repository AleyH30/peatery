import React from "react";
import './Intro.css';

const Intro = () => {
    
    return (
        <div className="intro-container">
            <div className="intro-contents">
                <video className="intro-video" autoPlay muted loop>
                    <source src="./images/promo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p className="intro-text-left">Finest Dining</p>
                <p className="intro-text-right">Established 1942.</p>
            </div>
        </div>
    )
}

export default Intro