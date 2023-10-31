import './index.css';

function CompanyContainer(props) {
    return (
        <div id="CompanyContainer">
            <h4>{props.company}</h4>
        </div>
    );
}

export default CompanyContainer;