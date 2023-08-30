import BriefDescriptionContainer from '../BriefDescriptionContainer';
import PicNameTechContainer from '../PicNameTechContainer';
import VideoContainer from '../VideoContainer';
import './index.css';


export default function LargeContainer() {
    return (
        <div id="LargeContainer">
            <PicNameTechContainer />
            <BriefDescriptionContainer />
            <VideoContainer />
        </div>
    );
}