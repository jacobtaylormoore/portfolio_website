import IntroParagraph from './IntroParagraph';
import PictureContainer from './PictureContainer';
import './index.css';

function IntroContent() {
    return (
        <div className="introContent" id="introContent">
            {/* Intro paragraph and pictures */}
            <IntroParagraph />
            <PictureContainer />
        </div>
    );
}

export default IntroContent;