import './index.css';

function NavText({ text }) {
    return (
        <div className="navTextContainer" id="navTextContainer">
            <h1 id="navText">{text}</h1>
        </div>
    );
}

export default NavText;