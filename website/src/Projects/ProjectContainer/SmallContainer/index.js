import BriefDescriptionContainer from '../BriefDescriptionContainer';
import PicNameTechContainer from '../PicNameTechContainer';
import './index.css';

export default function SmallContainer() {
    return (
        <div id="SmallContainer">
            <PicNameTechContainer />
            <BriefDescriptionContainer />
        </div>
    );
}