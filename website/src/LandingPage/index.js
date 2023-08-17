import WelcomeContainer from './Welcome';
import NavBar from './NavBar';
import './index.css';
import IntroContent from './IntroContent';

function LandingPage() {
    return (
        <div id="LandingPage">
            <NavBar />
            <WelcomeContainer />
            <IntroContent />
        </div>
    );
}

export default LandingPage;