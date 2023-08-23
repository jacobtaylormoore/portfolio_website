import BriefDescriptionContainer from './BriefDescriptionContainer';
import PicNameTechContainer from './PicNameTechContainer';
import VideoContainer from './VideoContainer';
import './index.css';

function LargeProjectContainer() {
    return (
        <div id="LargeProjectContainer">
            <PicNameTechContainer />
            <BriefDescriptionContainer />
            <VideoContainer />
        </div>
    );
}

export default LargeProjectContainer;