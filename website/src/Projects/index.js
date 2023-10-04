import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import ProjectContainer from './ProjectContainer';

function Projects() {

    let entries = [

        { "NBA Quiz React App (Hackathon Submission)": { "the": "horse" } }

    ];

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