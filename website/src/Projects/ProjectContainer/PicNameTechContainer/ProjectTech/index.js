import './index.css';

function ProjectTech(props) {
    return (
        <div id="ProjectTech">
            <h3>{props.tech[0]}</h3>
            <h3>{props.tech[1]}</h3>
            <h3>{props.tech[2]}</h3>
        </div>
    );
}

export default ProjectTech;