import './App.css';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Experience from './Experience';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <div className="App">


      <LandingPage />
      <Projects />
      <Experience />
      <AboutPage />
      <ContactPage />



    </div>
  );
}

export default App;
