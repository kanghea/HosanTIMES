import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import Map from './map';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Student from './student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/student" element={<Student/>} />
    </Routes>
  </Router>
);

reportWebVitals();
