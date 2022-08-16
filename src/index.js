import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './desktop/main';
import Content0 from './desktop/components/Content0';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Content1 from './desktop/components/Content1';
import Content2 from './desktop/components/Content2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/0" element={<Content0 />} />
        <Route path="/1" element={<Content1 />} />
        <Route path="/2" element={<Content2 />} />
      </Routes>
  </Router>
);

reportWebVitals();
