import './index.css';

function BulletsContainer(props) {
    const styles = { color: "orange" }
    return (
        <div id="BulletsContainer">
            <ul>
                {props.bullets.map((bullet, i) => <li id={i} style={styles}>{bullet}</li>)}
            </ul>
        </div>
    );
}

export default BulletsContainer;