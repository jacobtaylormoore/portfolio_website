import './index.css';

function BulletsContainer(props) {

    return (
        <div id="BulletsContainer">
            <ul>
                {props.bullets.map((bullet, i) => <li id={i}>{bullet}</li>)}
            </ul>
        </div>
    );
}

export default BulletsContainer;