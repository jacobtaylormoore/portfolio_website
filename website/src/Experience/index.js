import ExperienceContainer from './ExperienceContainer';
import ExperienceTitleContainer from './ExperienceTitle';
import './index.css';

function Experience() {
    return (
        <div className="Experience" id="Experience">
            <ExperienceTitleContainer />
            <ExperienceContainer />
            <ExperienceContainer />
            <ExperienceContainer />
            <ExperienceContainer />
        </div>
    );
}

export default Experience;