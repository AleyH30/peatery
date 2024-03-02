import React, {useState, useEffect} from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const GoTo = (target) => {
        if (target){
            document.querySelector(target).scrollIntoView(
        { behavior: "smooth", block: "start", inline: "nearest" })}
    }
    const Width = () => {
        var width = window.innerWidth;
        if (width > 775){
            setSidebarActive(false);
        }
      }
    window.addEventListener('resize', Width)

    useEffect(() => {
        document.body.style.overflow = sidebarActive ? "hidden" : "unset";
      }, [sidebarActive]);
    
    return (
        <>
            <div className="nav-container">
                <div className="nav-contents">
                    <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Pinela's Eatery</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button></li>
                            <li><button type="button" onClick={() => GoTo('.food-gallery')}>Menu</button></li>
                            <li><button type="button" onClick={() => GoTo('.reservations')}>Reservation</button></li>
                            <li><button type="button" onClick={() => GoTo('.contact-container')}>Contact</button></li>
                        </ul>
                    </nav>
                    <button className="sidebar-toggle-btn" onClick={() => setSidebarActive(!sidebarActive)}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>
            <div className="sidebar-bg-closeout-btn" style={{ display: sidebarActive ? "block" : "none" }} onClick={() => setSidebarActive(false)}></div>
            <div className="sidebar-nav-container" style={{ display: sidebarActive ? "block" : "none" }}>
                <button className="sidebar-x-closeout-btn" onClick={() => setSidebarActive(!sidebarActive)}>X</button>
                <nav>
                    <ul className="sidebar-nav-links">
                        <li><button className="sidebar-nav-menu-btn" type="button" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setSidebarActive(false); }}>Home</button></li>
                        <li><button className="sidebar-nav-menu-btn" type="button" onClick={() => { GoTo('.food-gallery'); setSidebarActive(false); }}>Menu</button></li>
                        <li><button className="sidebar-nav-menu-btn" type="button" onClick={() => { GoTo('.reservations'); setSidebarActive(false); }}>Reservation</button></li>
                        <li><button className="sidebar-nav-menu-btn" type="button" onClick={() => { GoTo('.contact-container'); setSidebarActive(false); }}>Contact</button></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar