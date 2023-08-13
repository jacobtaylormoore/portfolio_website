import WelcomeContainer from './Welcome';
import NavBar from './NavBar';
import './index.css';
import IntroContent from './IntroContent';

function LandingPage() {
    return (
        <div className="landingContainer" id="landingContainer">
            <NavBar />
            <WelcomeContainer />
            <IntroContent />
        </div>
    );
}

export default LandingPage;