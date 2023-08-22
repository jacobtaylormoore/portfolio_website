
import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import MediumProjectContainer from './MediumProjectContainer';

function Projects() {
    return (
        <div id="ProjectsContainer">
            <ProjectsTitleContainer />
            <MediumProjectContainer />
            <MediumProjectContainer />
            <MediumProjectContainer />
            <MediumProjectContainer />
        </div>
    );
}

export default Projects;