import NavText from './NavText';
import './index.css';

function NavBar() {
    return (
        <section id="NavBar">
            <div id="TextContainer">
                <NavText navLocation="#projectsContainer" text={"Projects"} />
                <NavText navLocation="#experienceLayout" text={"Experience"} />
                <NavText navLocation="#aboutPageContainer" text={"About Me"} />
                <NavText navLocation="#contactPage" text={"Contact"} />
            </div>
        </section>
    );
}

export default NavBar;