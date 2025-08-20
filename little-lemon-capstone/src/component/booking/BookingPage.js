import BookingForm from './BookingForm.js';
import React, { useState, useReducer } from "react";

const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
  ];


export function initializeTimes() {
  return { list: availableTimes };
}

export const updateTimes = (state, action) => {
    return state;
}

function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return (
    <BookingForm availableTimes={state.list} dispatchTimes={dispatch}/>
  );
}

export default BookingPage
