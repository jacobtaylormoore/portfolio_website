import './index.css';

function NavText({ text, navLocation }) {
    return (
        <div id="NavTextContainer">
            <a href={navLocation} id="NavText">{text}</a>
        </div>
    );
}

export default NavText;