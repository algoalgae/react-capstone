import BookingForm from './BookingForm.js';
import React, { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from '../../api/api.js';

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

  return (
    <BookingForm availableTimes={state.list} dispatchTimes={dispatch} submitForm={submitForm}/>
  );
}

export default BookingPage
