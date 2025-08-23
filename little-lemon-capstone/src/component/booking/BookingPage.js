import BookingForm from './BookingForm.js';
import React, { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from '../../api/api.js';
import '../../assets/css/layout.css';

const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
  ];


export function initializeTimes() {
  const today = new Date();
  return { list: fetchAPI(today) };
}

export const updateTimes = (state, action) => {
  if (action && action.date) {
    // action.date is a string like "2025-08-20" from the <input type="date" />
    const dateObj = new Date(action.date);
    const nextTimes = fetchAPI(dateObj) || [];
    // Return a NEW state object (immutability)
    return { list: nextTimes };
  }
  return state;
}


export const submitForm = (formData) => {
  return submitAPI(formData);
}

function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitForm = (formData) => {
    if (submitAPI(formData)) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
        {!isSubmitted ? (
          <div className="booking-page">
      <div className="booking-form-container">
            <h2 className="booking-title">Make Your Reservation</h2>
            <BookingForm
              availableTimes={state.list}
              dispatchTimes={dispatch}
              onSubmitForm={handleSubmitForm}
            />
          
      </div>
    </div>
        ) : (
          <div className="confirm-page">
      <div className="confirm-container">
      <h1 className="confirm-title">Booking Confirmed</h1>
      <p className="confirm-message">Your reservation has been successfully submitted.</p>
    </div></div>
        )}
        </>
  );
}

export default BookingPage
