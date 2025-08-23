import React, { useState, useReducer } from "react";
//import { useNavigate } from "react-router-dom";
import '../../assets/css/layout.css';

const BookingForm = ({availableTimes, dispatchTimes, onSubmitForm, }) => {
  //const navigate = useNavigate();
  //NOTE : For what ever reason and no matter how many things I tried, I could not get tests to run when I have react-router-dom imported
  //tried to use react-router instead since that is what it should be for 7+ version. Didnt help.
  //I had to improvise to not use it unfortunately. 

   // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // "Touched" flags for live validation UX
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!formValid) return;

    const formData = { date, time, guests, occasion };

    onSubmitForm(formData);
    
    // RESET on Submission
      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
      setTouched({ date: false, time: false, guests: false, occasion: false });

      //navigate("/confirmation");
  };

  const handleDateChange = (e) => {
    const date = e.target.value
    setDate(date);
    setTime("");
    dispatchTimes({date: date});
  };

  // Validation helpers
  const errors = {
    date: !date ? "Please select a date." : "",
    time:
      !date
        ? "Choose a date first."
        : !time
        ? "Please select a time."
        : "",
    guests:
      guests === "" || Number.isNaN(Number(guests))
        ? "Enter a number between 1 and 10."
        : guests < 1 || guests > 10
        ? "Guests must be between 1 and 10."
        : "",
    occasion: !occasion ? "Please select an occasion." : "",
  };

  // Form validity check
  const formValid = !errors.date && !errors.time && !errors.guests && !errors.occasion;

  const errorStyle = { color: "#c1121f", fontSize: "0.8rem", marginTop: "-12px" };
  const labelGap = { display: "grid", gap: "6px" };

  return (
    <>
      <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      noValidate
    >
      <div style={labelGap}>
        <label htmlFor="res-date" aria-label="On Click">Choose date</label>
        <input type="date" id="res-date" name="date" value={date} onChange={handleDateChange}
        onBlur={() => setTouched((t) => ({ ...t, date: true }))}
          aria-invalid={!!errors.date && touched.date}
          required/>
          {touched.date && errors.date && <span style={errorStyle}>{errors.date}</span>}
      </div>

       <div style={labelGap}>
        <label htmlFor="res-time" aria-label="On Click">Choose time</label>
        <select id="res-time" name="time" value={time} onChange={(e) => setTime(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, time: true }))}
          disabled={!date || availableTimes?.length === 0}
          aria-invalid={!!errors.time && touched.time}
          required>
          <option value="">-- Select a time --</option>
          {availableTimes?.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {touched.time && errors.time && <span style={errorStyle}>{errors.time}</span>}
      </div>

      <div style={labelGap}>
        <label htmlFor="guests" aria-label="On Click">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, guests: true }))}
          aria-invalid={!!errors.guests && touched.guests}
          required/>
          {touched.guests && errors.guests && (
          <span style={errorStyle}>{errors.guests}</span>
        )}
      </div>

      <div style={labelGap}>
        <label htmlFor="occasion" aria-label="On Click">Occasion</label>
        <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target
          .value
        )}
        onBlur={() => setTouched((t) => ({ ...t, occasion: true }))}
          aria-invalid={!!errors.occasion && touched.occasion}
          required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span style={errorStyle}>{errors.occasion}</span>
        )}
      </div>
      <input className="btn btn-primary" type="submit" value="Make Your Reservation" disabled={!formValid} aria-disabled={!formValid}/>
    </form>
    </>
  );
}

export default BookingForm
