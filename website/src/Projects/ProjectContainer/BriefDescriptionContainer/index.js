import './index.css';

function BriefDescriptionContainer(props) {
    return (
        <div id="BriefDescriptionContainer">
            <p>{props.description}</p>
        </div>
    );
}

export default BriefDescriptionContainer;