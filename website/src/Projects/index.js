import ProjectContainer from './ProjectContainer';
import './index.css';

function Projects() {
    return (
        <div className="projectsContainer" id="projectsContainer">
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
        </div>
    );
}

export default Projects;