import React from "react";
import './Reservations.css';
import Calendar from "./Calendar";

const Reservations = () => {

    return (
        <div className="reservations">
            <h3>Reservations</h3>
            <p>To make a reservation please call us at (678)-9X0-7XX0 or use the contact form
                below to reserve a date and time.</p>
            <div className="reservations-calendar">
                <Calendar />
            </div>

        </div>

    )
}

export default Reservations