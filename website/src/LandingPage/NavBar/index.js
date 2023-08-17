import NavText from './NavText';
import './index.css';

function NavBar() {
    return (
        <section id="NavBar">
            <div id="TextContainer">
                <NavText navLocation="#ProjectsContainer" text={"Projects"} />
                <NavText navLocation="#Experience" text={"Experience"} />
                <NavText navLocation="#AboutPage" text={"About Me"} />
                <NavText navLocation="#ContactPage" text={"Contact"} />
            </div>
        </section>
    );
}

export default NavBar;