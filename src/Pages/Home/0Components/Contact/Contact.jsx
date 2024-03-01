import React from "react";
import './Contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <h4>Contact Us</h4>
            <div className="contact-contents">
                <div className="contact-form">
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div className="input-group">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input">
                                <label>Subject</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input">
                            <label>Message</label>
                            <textarea rows="7"></textarea>
                        </div>
                        <button className='submit-btn' type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-info">
                    <p>
                        <u><b>Location:</b></u>
                        <br/>2345 W. Lane<br/>Kent, CA 93204</p>
                    <p>(678)-9X0-7XX0</p>
                    <br/>
                    <p>
                        <u><b>Hours:</b></u>
                        <br />Sunday: 11:30 am - 11:30 pm
                        <br />Monday: 11:30 am - 9:00 pm
                        <br />Tuesday: 11:30 am - 9:00 pm
                        <br />Wednesday: 11:30 am - 9:00 pm
                        <br />Thursday: 11:30 am - 9:00 pm
                        <br />Friday: 11:30 am - 11:30 pm
                        <br />Saturday: 11:30 am - 11:30 pm
                    </p>
                </div>
            </div>
            <p className="signature">Made by ANH</p>
        </div>
    )
}

export default Contact