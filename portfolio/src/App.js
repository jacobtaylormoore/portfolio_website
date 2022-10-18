import React from 'react';
import logo from "./logo.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
//MUI
import Typography from '@mui/material/Typography';


// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';




function App() {
  //const [data, setData] = React.useState(null);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// React.useEffect(() => {
//   fetch("/")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);



export default App;
