import SmallProjectContainer from './SmallProjectContainer';
import LargeProjectContainer from './LargeProjectContainer';
import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import MediumProjectContainer from './MediumProjectContainer';

function Projects() {
    return (
        <div id="ProjectsContainer">
            <ProjectsTitleContainer />
            <SmallProjectContainer />
            <LargeProjectContainer />
            <SmallProjectContainer />
            <SmallProjectContainer />
        </div>
    );
}

export default Projects;