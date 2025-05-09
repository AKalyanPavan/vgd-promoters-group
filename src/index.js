import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Homepage from './components/Homepage.js';
import Services from './components/Services.js';
import Projects from './components/Projects.js';
import ContactUs from './components/Contactus.js';
import AboutUs from './components/Aboutus.js';
import FormSubmit from './components/FormSubmit.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route index path='/' element={<Homepage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/formsubmit' element={<FormSubmit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
