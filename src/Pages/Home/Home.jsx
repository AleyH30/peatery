import React from "react";
import Intro from "./0Components/Intro/Intro";
import FoodGallery from "./0Components/FoodGallery/FoodGallery";
import Menu from "./0Components/Menu/Menu";
import Reservations from "./0Components/Reservations/Reservations";
import Contact from "./0Components/Contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import Navbar from "./0Components/Navbar/Navbar";


const Home = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <Intro />
            <div className="break-icon">
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
            </div>
            <FoodGallery />
            <Menu />
            <div className="break-icon">
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
            </div>
            <Reservations />
            <div className="break-icon">
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
                <FontAwesomeIcon icon={faInfinity}/>
            </div>
            <div className="dining-img">
                <img src="./images/dining.jpg" alt="" />
            </div>
            <Contact />
        </div>
    )
}

export default Home