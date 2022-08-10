import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import Student from './student';
import Teacher from './teacher';
import Parents from './Parents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BrowserView>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student" element={<Student/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/parents" element={<Parents/>} />
      </Routes>
    </BrowserView>
    <MobileView>
      
    </MobileView>
  </Router>
);

reportWebVitals();
