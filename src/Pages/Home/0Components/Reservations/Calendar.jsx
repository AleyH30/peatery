import * as React from "react";
import {useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker, MobileDatePicker } from "@mui/x-date-pickers";
import './Calendar.css';

var time, time2, date, date2, fullName2, guestNumber2;

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [fullName, setFullName] = useState("")
    const [guestNumber, setGuestNumber] = useState(2)
    const [day, setDay] = useState(null)
    const [valid, setValid] = useState(null)
    const [error, setError] = useState(null);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [update, setUpdate] = useState(true);

    const ClickReserve = () => {
        setSubmitClicked(true);
        let clear = true;
        if (selectedDate === null){clear = false}
        if (selectedTime === null) {clear = false}
        if (fullName === ""){clear = false;}
        if (error !== null) {clear = false}

        if (clear === true)
        {
            date2 = date = new Date(selectedDate).toLocaleDateString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',})
            time2 = time = new Date(selectedTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            fullName2 = fullName;
            guestNumber2 = guestNumber;
            setUpdate(!update);
            setValid(true);

            setSelectedDate(null)
            setSelectedTime(null)
            setFullName("")
            setGuestNumber(2)
            setSubmitClicked(false)
        }
        else{
            setValid(false);
        }
    }

    const ShouldDisableTime = (date, view) => {
        if (day === "Monday" || day === 'Tuesday' || day==='Wednesday' || day === "Thursday"){
            return view === 'hours' && (date.hour() < 10 || 20 < date.hour())
        }
        else if (day=== "Friday" || day === "Sunday" || day === "Saturday"){
            return view === 'hours' && (date.hour() < 10 || 22 < date.hour())
        }
    }
    const GetDay = (newValue) => {
        let newDay = new Date(newValue).toLocaleDateString([], {weekday: "long"});
        setDay(newDay);
    }

    
    return(
        <div className="reservation-form">
            <label className="rf-label" htmlFor="fname">Full Name</label>
            <input className="rf-input-name" type="text" id="fname" name="fname" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            <p className="error">{submitClicked && fullName === ""? "Please set valid name" : console.log(null)}</p>
            <label className="rf-label" htmlFor="partynumber" >Party of</label>
            <select className="rf-input-number" name="number" id="partynumber" value={guestNumber} onChange={(e) => setGuestNumber(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                        <MobileDatePicker className="rf-input"
                        label='Date'
                        value={selectedDate}
                        disablePast
                        onChange={(newValue) => { setSelectedDate(newValue) ; GetDay(newValue)}} 
                        required
                        />
                    </div>
                    <p className="error">{submitClicked && selectedDate === null? "Please select valid date" : console.log(null)}</p>
                    <div>
                        <MobileTimePicker className="rf-input"
                        label='Time'
                        value={selectedTime}
                        onChange={(newValue) => { setSelectedTime(newValue) }} 
                        shouldDisableTime={ShouldDisableTime}
                        onError={(newError) => setError(newError)}
                        required
                        />
                    </div>
                    <p className="error">{(submitClicked && selectedTime === null) || error !== null? "Please select valid time" : console.log(null)}</p>
                </LocalizationProvider>
            </div>
            <div>
                <button className="rf-btn" type="button" onClick={ClickReserve}>Reserve</button>
            </div>
            <p className="date-success-msg">{valid? "Thank you, " + fullName2 + ", a table for (" + guestNumber2 + ") has been reserved for (" + date2 + ") at (" + time2 + ")." : null }</p>
        </div>
    )
}

export default Calendar