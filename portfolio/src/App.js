import React from 'react';
import logo from "./logo.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
//MUI
import Typography from '@mui/material/Typography';


// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import Microservice from './pages/Microservice';

// Styles
import styles from './mystyle.module.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/microservice" element={<Microservice />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
