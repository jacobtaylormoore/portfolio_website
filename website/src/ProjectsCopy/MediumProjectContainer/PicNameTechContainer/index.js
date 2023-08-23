import ProjectName from './ProjectName';
import ProjectPic from './ProjectPic';
import ProjectTech from './ProjectTech';
import './index.css';

function PicNameTechContainer() {
    return (
        <div id="PicNameTechContainer">
            <ProjectPic />
            <ProjectName />
            <ProjectTech />
        </div>
    );
}

export default PicNameTechContainer;