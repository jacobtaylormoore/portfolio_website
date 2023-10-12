import './App.css';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Experience from './Experience';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

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
