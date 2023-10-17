import BriefDescriptionContainer from '../BriefDescriptionContainer';
import PicNameTechContainer from '../PicNameTechContainer';
import './index.css';

export default function SmallContainer(props) {
    return (
        <div id="SmallContainer">
            <PicNameTechContainer name={props.project[0]} tech={props.project[1]} />
            <BriefDescriptionContainer description={props.project[2]} />
        </div>
    );
}