import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav.js';
import Home from "./component/HomePage.js";
import BookingPage from "./component/booking/BookingPage.js";
import BookingConfirmation from "./component/booking/BookingConfirmation.js";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reservation" element={<BookingPage/>}></Route>
        <Route path="/confirmation" element={<BookingConfirmation/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
