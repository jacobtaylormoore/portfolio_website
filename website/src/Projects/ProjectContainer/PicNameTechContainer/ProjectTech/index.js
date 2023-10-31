import './index.css';

function ProjectTech(props) {
    return (
        <div id="ProjectTech">
            <h4>{props.tech[0]}</h4>
            <h4>{props.tech[1]}</h4>
            <h4>{props.tech[2]}</h4>
        </div>
    );
}

export default ProjectTech;