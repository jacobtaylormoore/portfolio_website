import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import ProjectContainer from './ProjectContainer';

function Projects() {

    return (
        <div id="Projects">
            <ProjectsTitleContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
        </div>
    );
}

export default Projects;