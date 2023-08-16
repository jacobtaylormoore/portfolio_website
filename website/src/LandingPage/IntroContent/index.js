import IntroParagraph from './IntroParagraph';
import PictureContainer from './PictureContainer';
import './index.css';

function IntroContent() {
    return (
        <div id="IntroContent">
            {/* Intro paragraph and pictures */}
            <IntroParagraph />
            <PictureContainer />
        </div>
    );
}

export default IntroContent;