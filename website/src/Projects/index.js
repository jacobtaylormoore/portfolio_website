import ProjectContainer from './ProjectContainer';
import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';

function Projects() {
    return (
        <div id="ProjectsContainer">
            <ProjectsTitleContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
        </div>
    );
}

export default Projects;