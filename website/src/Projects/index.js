import ProjectContainer from './ProjectContainer';
import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';

function Projects() {
    return (
        <div className="projectsContainer" id="projectsContainer">
            <ProjectsTitleContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
        </div>
    );
}

export default Projects;