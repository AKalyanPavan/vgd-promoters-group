import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage.js';
import Services from './components/Services.js';
import ContactUs from './components/Contactus.js';
import AboutUs from './components/Aboutus.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route index path='/' element={<Homepage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        {/*<Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/case-study' element={<CaseStudy />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/terms-of-service' element={<TermsofService />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
