import ProjectName from './ProjectName';
// import ProjectPic from './ProjectPic';
import ProjectTech from './ProjectTech';
import './index.css';

function PicNameTechContainer(props) {
    return (
        <div id="PicNameTechContainer">
            {/* <ProjectPic /> */}
            <ProjectName name={props.name} />
            <ProjectTech tech={props.tech} />
        </div>
    );
}

export default PicNameTechContainer;