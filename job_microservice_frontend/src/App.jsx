import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Company_ms from './componenets/Company_ms';
import JobList from './componenets/JobList';
import ReviewUI from './componenets/ReviewUI';
import Navbar from './componenets/Navbar'; // Optional: For navigation links

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Company_ms />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/reviews" element={<ReviewUI />} />
      </Routes>
    </Router>
  );
}

export default App;
